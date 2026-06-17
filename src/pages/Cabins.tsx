import { QueryClient } from "@tanstack/react-query";
import { getCabins } from "../services/requests/CabinsRequests";
import { StyledTable } from "../ui/table/StyledTable";
import { StyledTableRow } from "../ui/table/StyledTableRow";
import { StyledTableHeader } from "../ui/table/StyledTableHeader";
import { StyledTableHead } from "../ui/table/StyledTableHead";
import { StyledTableBody } from "../ui/table/StyledTableBody";
import { useLoaderData } from "react-router-dom";
import type { CabinType as Cabin } from "../sharedTypes/types/Cabin.type";
import { StyledTableData } from "../ui/table/StyledTableData";

export const Cabins = () => {
  const headerNames = ["", "Cabin", "Capacity", "Price", "Discount"];
  const data = useLoaderData<Cabin[]>();
  return (
    <StyledTable>
      <StyledTableHeader>
        <StyledTableRow>
          {headerNames.map((hn, i) => (
            <StyledTableHead key={i}>{hn}</StyledTableHead>
          ))}
        </StyledTableRow>
      </StyledTableHeader>
      <StyledTableBody>
        {data.map((cabin) => {
          return (
            <StyledTableRow key={cabin.id}>
              <StyledTableData>
                <img
                  src={cabin.image}
                  alt={cabin.name}
                  className="max-w-20 transition-transform duration-300 hover:scale-150"
                />
              </StyledTableData>

              <StyledTableData>
                <p>{cabin.name}</p>
              </StyledTableData>
              <StyledTableData>{cabin.maxCapacity}</StyledTableData>
              <StyledTableData>{cabin.regularPrice}</StyledTableData>
              <StyledTableData>{cabin.discount}</StyledTableData>
              <StyledTableData>Delete</StyledTableData>
            </StyledTableRow>
          );
        })}
      </StyledTableBody>
    </StyledTable>
  );
};

export const Loader =
  (queryClient: QueryClient) =>
  async ({ request }: { request: Request }) => {
    return queryClient.ensureQueryData({
      queryKey: ["cabins"],
      queryFn: () => getCabins({ signal: request.signal }),
    });
  };
