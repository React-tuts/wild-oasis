import { MdDeleteForever } from "react-icons/md";
import { StyledButton } from "../../ui/buttons/StyledButton";
import { StyledTable } from "../../ui/table/StyledTable";
import { StyledTableBody } from "../../ui/table/StyledTableBody";
import { StyledTableData } from "../../ui/table/StyledTableData";
import { StyledTableHeader } from "../../ui/table/StyledTableHeader";
import { StyledTableRow } from "../../ui/table/StyledTableRow";
import { StyledTableHead } from "../../ui/table/StyledTableHead";
import type { CabinType as Cabin } from "../../sharedTypes/types/Cabin.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { DeleteCabin, getCabins } from "../../services/requests/CabinsRequests";

export const CabinsList = () => {
  const headerNames = ["", "Cabin", "Capacity", "Price", "Discount"];

  const queryClient = useQueryClient();
  const controller = new AbortController();

  const { data, isLoading, isError } = useQuery<Cabin[]>({
    queryFn: ({ signal }) => getCabins({ signal }),
    queryKey: ["cabins"],
  });

  const { mutate, isPending: isDeleting } = useMutation({
    mutationFn: DeleteCabin,
    onSuccess: () => {
      toast.success("Cabin deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete cabin");
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
  });

  if (isLoading) return <p>Loading....</p>;
  if (isError) return <p>Failed to Load cabins</p>;

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
        {data &&
          data.map((cabin) => {
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
                <StyledTableData>
                  <p className="font-semibold text-green-500">
                    {cabin.discount}
                  </p>
                </StyledTableData>
                <StyledTableData>
                  <StyledButton
                    onClick={() =>
                      mutate({
                        cabinId: cabin.id,
                        signal: controller.signal,
                      })
                    }
                    disabled={isDeleting}
                    style="roundedDelete"
                  >
                    <MdDeleteForever />
                  </StyledButton>
                </StyledTableData>
              </StyledTableRow>
            );
          })}
      </StyledTableBody>
    </StyledTable>
  );
};
