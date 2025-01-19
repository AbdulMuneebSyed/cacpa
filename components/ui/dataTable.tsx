"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
  PlusCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EditModal } from "@/components/edit-model";
import { LeadForm, LeadData } from "@/components/lead-form";
import {
  createClient,
  PostgrestResponse,
  SupabaseClient,
} from "@supabase/supabase-js";

type Lead = LeadData & {
  id_: string;
  createDate: string;
  createBy: string;
  editDate: string;
  editBy: string;
};

// Initialize Supabase client
const supabase: SupabaseClient = createClient(
  "https://cjrzpzawafiudegfzcbn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqcnpwemF3YWZpdWRlZ2Z6Y2JuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3MzI5ODEsImV4cCI6MjA1MTMwODk4MX0.tYE7pFDPWjNOC8uYrs7bvOwsvTd2W5IWUgJx1T-lPu8"
);

type CustomColumnDef<TData extends object> = ColumnDef<TData> & {
  options?: string[]; // Add the options property as an optional array of strings
};

export const columns: CustomColumnDef<Lead>[] = [
  {
    id: "select",
    header: ({ table }: { table: any }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }: { row: any }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id_",
    header: "Id",
    cell: ({ row }: { row: any }) => row.getValue("id_"),
  },
  {
    accessorKey: "accountName",
    header: "Account Name",
    cell: ({ row }: { row: any }) => <p>{row.getValue("accountName")}</p>,
  },
  {
    accessorKey: "leadSource",
    header: "Lead Source",
    options: [
      "Trade Show",
      "Account Mining",
      "Email Campaign",
      "Partner",
      "Tender Portal",
    ],
    cell: ({ row }: { row: any }) => <p>{row.getValue("leadSource")}</p>,
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }: { row: any }) => <p>{row.getValue("title")}</p>,
  },
  {
    accessorKey: "stage",
    header: "Stage",
    options: [
      "Vendor Registration",
      "Demo",
      "POC",
      "Technical",
      "Clarification",
      "Proposal",
      "Submitted",
    ],
    cell: ({ row }: { row: any }) => <p>{row.getValue("stage")}</p>,
  },
  {
    accessorKey: "status",
    header: "Status",
    options: ["New", "Qualified", "Working", "Nurturing"],
    cell: ({ row }: { row: any }) => <p>{row.getValue("status")}</p>,
  },
  {
    accessorKey: "leadOwner",
    header: "Lead Owner",
    cell: ({ row }: { row: any }) => <p>{row.getValue("leadOwner")}</p>,
  },
  {
    accessorKey: "industry",
    header: "Industry",
    options: [
      "Agriculture",
      "Forestry",
      "Fishing and Aquaculture",
      "Mining and Quarrying",
      "Oil and Gas",
    ],
    cell: ({ row }: { row: any }) => <p>{row.getValue("industry")}</p>,
  },
  {
    accessorKey: "services",
    header: "Services",
    cell: ({ row }: { row: any }) => <p>{row.getValue("services")}</p>,
  },
  {
    accessorKey: "products",
    header: "Products",
    cell: ({ row }: { row: any }) => <p>{row.getValue("products")}</p>,
  },
  {
    accessorKey: "rating",
    header: "Rating",
    options: ["Warm", "Cold", "Hot"],
    cell: ({ row }: { row: any }) => <p>{row.getValue("rating")}</p>,
  },
  {
    accessorKey: "leadFiscalPeriod",
    header: "Lead Fiscal Period",
    options: ["Q1", "Q2", "Q3", "Q4"],
    cell: ({ row }: { row: any }) => <p>{row.getValue("leadFiscalPeriod")}</p>,
  },
  {
    accessorKey: "assignedToSalesTeam",
    header: "Assigned To Sales Team",
    cell: ({ row }: { row: any }) => (
      <p>{row.getValue("assignedToSalesTeam")}</p>
    ),
  },
  {
    accessorKey: "domains",
    header: "Domains",
    cell: ({ row }: { row: any }) => <p>{row.getValue("domains")}</p>,
  },
  {
    accessorKey: "deploymentType",
    header: "Deployment Type",
    cell: ({ row }: { row: any }) => <p>{row.getValue("deploymentType")}</p>,
  },
  {
    accessorKey: "leadOverview",
    header: "Lead Overview",
    cell: ({ row }: { row: any }) => <p>{row.getValue("leadOverview")}</p>,
  },
  {
    accessorKey: "leadGeneratedMonth",
    header: "Lead Generated Month",
    options: ["January", "February", "March", "April", "May"],
    cell: ({ row }: { row: any }) => (
      <p>{row.getValue("leadGeneratedMonth")}</p>
    ),
  },
  {
    accessorKey: "createDate",
    header: "Create Date",
    cell: ({ row }: { row: any }) => <p>{row.getValue("createDate")}</p>,
  },
  {
    accessorKey: "createBy",
    header: "Create By",
    cell: ({ row }: { row: any }) => <p>{row.getValue("createBy")}</p>,
  },
  {
    accessorKey: "editDate",
    header: "Edit Date",
    cell: ({ row }: { row: any }) => <p>{row.getValue("editDate")}</p>,
  },
  {
    accessorKey: "editBy",
    header: "Edit By",
    cell: ({ row }: { row: any }) => <p>{row.getValue("editBy")}</p>,
  },
];

export function LeadManagementTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [data, setData] = React.useState<Lead[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [change, setChange] = React.useState(true);

 React.useEffect(() => {
   const fetchData = async () => {
     setIsLoading(true);
     const { data, error }: PostgrestResponse<Lead> = await supabase
       .from("leads")
       .select("*");

     if (error) {
       setError(error.message);
       setIsLoading(false);
       return;
     }

     console.log("connected to DB + 254");
     console.log(data);

     // Sort the data array by id_
     const sortedData = (data || []).sort((a, b) => {
       if (a.id_ < b.id_) return -1; // Ascending order
       if (a.id_ > b.id_) return 1;
       return 0;
     });

     setData(sortedData);
     setIsLoading(false);
   };

   // Initial fetch
   fetchData();

   // Subscribe to changes in the 'leads' table
   const subscription = supabase
     .channel("leads")
     .on(
       "postgres_changes",
       { event: "INSERT", schema: "public", table: "leads" },
       (payload) => {
         console.log("New data inserted:", payload);
         fetchData(); // Re-fetch data on insert
       }
     )
     .on(
       "postgres_changes",
       { event: "UPDATE", schema: "public", table: "leads" },
       (payload) => {
         console.log("Data updated:", payload);
         fetchData(); // Re-fetch data on update
       }
     )
     .on(
       "postgres_changes",
       { event: "DELETE", schema: "public", table: "leads" },
       (payload) => {
         console.log("Data deleted:", payload);
         fetchData(); // Re-fetch data on delete
       }
     )
     .subscribe();

   // Cleanup the subscription when the component is unmounted
   return () => {
     subscription.unsubscribe();
   };
 }, [change]);


  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  const [isAddLeadModalOpen, setIsAddLeadModalOpen] = React.useState(false);
  const [editingCell, setEditingCell] = React.useState<{
    row: number;
    column: string;
    value: string;
    options?: string[];
  } | null>(null);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  const handleCellClick = (
    row: number,
    column: string,
    value: string,
    options?: string[]
  ) => {
    console.log("this is", row, column, value);
    setEditingCell({ row, column, value, options });
  };

 const handleSaveEdit = async (value: string) => {
   if (editingCell) {
     setChange(false);
     const updatedData = [...data];

     // Get the current date and time in the desired format
     const currentDate = new Date();
     const formattedDate =
       `${currentDate.getDate().toString().padStart(2, "0")}/` +
       `${(currentDate.getMonth() + 1).toString().padStart(2, "0")}/` +
       `${currentDate.getFullYear().toString().slice(-2)} ` +
       `${currentDate.getHours().toString().padStart(2, "0")}:` +
       `${currentDate.getMinutes().toString().padStart(2, "0")}`;

     const updatedRow = {
       ...updatedData[editingCell.row],
       [editingCell.column]: value,
       editDate: formattedDate, // Set formatted date here
     };
     updatedData[editingCell.row] = updatedRow;

     try {
       const { error } = await supabase
         .from("leads") // Replace with your table name
         .update({
           [editingCell.column]: value,
           editDate: updatedRow.editDate, // Update editDate as well
         })
         .eq("id_", updatedRow.id_); // Assuming 'id' is your primary key column
       if (error) {
         console.error("Error updating data in Supabase:", error);
       } else {
         console.log("Updated data:", updatedData);
       }
       setChange(true);
     } catch (err) {
       console.error("Unexpected error:", err);
     }
   }
   setEditingCell(null);
 };




  const handleAddLead = async (leadData: LeadData) => {
    setChange(false);
   const newLead: Lead = {
     ...leadData,
     id_: (data.length + 1).toString(),
     createDate:
       new Date().toLocaleString("en-US", {
         hour: "2-digit",
         minute: "2-digit",
         hour12: true,
       }) +
       " " +
       new Date().getDate() +
       ", " +
       (new Date().getMonth() + 1) +
       ", " +
       new Date().getFullYear(),
     createBy: "Current User", // You can replace this with the actual user information
     editDate:
       new Date().toLocaleString("en-US", {
         hour: "2-digit",
         minute: "2-digit",
         hour12: true,
       }) +
       " " +
       new Date().getDate() +
       ", " +
       (new Date().getMonth() + 1) +
       ", " +
       new Date().getFullYear(),
     editBy: "Current User", // Same for editBy, you can set the actual user
   };



    try {
      const { error } = await supabase
        .from("leads") // Replace with your actual table name
        .insert([newLead]); // Inserts the new lead into Supabase

      if (error) {
        console.error("Error inserting data into Supabase:", error);
      } else {
        console.log("New lead added:", newLead);
        data.push(newLead); // Update local state after successful insertion
        setIsAddLeadModalOpen(false);
        setChange(true);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };


  return (
    <div className="w-max-screen">
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Filter account names..."
          value={
            (table.getColumn("accountName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("accountName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="max-h-96 overflow-y-scroll"
            >
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button onClick={() => setIsAddLeadModalOpen(true)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Lead
          </Button>
        </div>
      </div>
      <div className="rounded-md border ">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="min-w-32 cursor-pointer">
                    <div
                      className="w-full cursor-pointer"
                      onClick={() => {
                        if (
                          cell.column.id != "select" &&
                          cell.column.id != "editBy" &&
                          cell.column.id != "editDate" &&
                          cell.column.id != "createBy" &&
                          cell.column.id != "createDate"
                        ) {
                          handleCellClick(
                            row.index,
                            cell.column.id,
                            cell.getValue() as string,
                            (cell.column.columnDef as any).options
                          );
                        }
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
      </div>
      {editingCell && (
        <EditModal
          isOpen={!!editingCell}
          onClose={() => setEditingCell(null)}
          onSave={handleSaveEdit}
          value={editingCell.value}
          column={{
            id: editingCell.column,
            header: table.getColumn(editingCell.column)?.columnDef
              .header as string,
          }}
          options={editingCell.options}
        />
      )}
      <LeadForm
        isOpen={isAddLeadModalOpen}
        onClose={() => setIsAddLeadModalOpen(false)}
        onSave={handleAddLead}
      />
    </div>
  );
}
function useEffect(arg0: () => () => void, arg1: boolean[]) {
  throw new Error("Function not implemented.");
}

