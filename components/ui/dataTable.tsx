"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
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
import { LeadForm, type LeadData } from "@/components/lead-form";
import {
  createClient,
  type PostgrestResponse,
  type SupabaseClient,
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
      cell: ({ row }: { row: any }) => (
        <p>{row.getValue("accountName") ?? null}</p>
      ),
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
        "Single Source",
        "Advertisement",
        "Cold Calls",
        "Custumer Event",
        "Employee Referal",
        "Linkedin",
        "Vender Portal",
        "Website",
        "Personal Contact",
        "others",
      ],
      cell: ({ row }: { row: any }) => <p>{row.getValue("leadSource")}</p>,
    },
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }: { row: any }) => <p>{row.getValue("title") ?? null}</p>,
    },
    {
      accessorKey: "stage",
      header: "Stage",
      options: [
        "Vendor Registration",
        "Demo",
        "POC",
        "Technical Clarification",
        "Proposal Submited",
        "NEGOTIATION",
        "DEALS WON",
        "PROPOSAL SUBMITTED",
        "BQ SUBMITTED",
        "RFP",
        "RFI",
        "RFQ",
        "On Hold",
      ],
      cell: ({ row }: { row: any }) => <p>{row.getValue("stage")}</p>,
    },
    {
      accessorKey: "status",
      header: "Status",
      options: [
        "New",
        "Qualified",
        "Working",
        "Nurturing",
        "Qualified",
        "Converted Opportunity",
        "On Hold",
        "Others",
      ],
      cell: ({ row }: { row: any }) => <p>{row.getValue("status")}</p>,
    },
    {
      accessorKey: "leadOwner",
      header: "Lead Owner",
      cell: ({ row }: { row: any }) => (
        <p>{row.getValue("leadOwner") ?? null}</p>
      ),
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
        "Construction",
        "Food and Beverage Manufacturing",
        "Textiles and Apparel",
        "Chemical and Pharmaceutical Manufacturing",
        "Automobile and Transportation Equipment Manufacturing",
        "Steel and Metal Production",
        "Electronics and Electrical Equipment Manufacturing",
        "Machinery and Industrial Equipment",
        "Paper and Packaging",
        "Plastic and Rubber Products Manufacturing",
        "Healthcare and Pharmaceuticals",
        "Education and Training",
        "Hospitality and Tourism",
        "Retail and E-Commerce",
        "Banking and Financial Services",
        "Insurance",
        "Telecommunications",
        "Transportation and Logistics",
        "Utilities (Electricity, Water, Gas)",
        "Real Estate and Property Management",
        "Media and Entertainment",
        "IT and Software Development",
        "Consulting Services",
        "Legal Services",
        "Research and Development (R&D)",
        "Biotechnology",
        "Aerospace",
        "Renewable Energy",
        "Data Analytics and Artificial Intelligence",
        "Digital Marketing and Advertising",
        "Cloud Computing and Cybersecurity",
        "Government and Public Administration",
        "Non-Profit and Social Enterprises",
        "Defense and Military",
        "Space Exploration and Technology",
      ],
      cell: ({ row }: { row: any }) => <p>{row.getValue("industry")}</p>,
    },
    {
      accessorKey: "services",
      header: "Services",
      cell: ({ row }: { row: any }) => (
        <p>{row.getValue("services") ?? null}</p>
      ),
    },
    {
      accessorKey: "products",
      header: "Products",
      cell: ({ row }: { row: any }) => (
        <p>{row.getValue("products") ?? null}</p>
      ),
    },
    {
      accessorKey: "rating",
      header: "Rating",
      options: ["Warm", "Cold", "Hot"],
      cell: ({ row }: { row: any }) => <p>{row.getValue("rating")}</p>,
    },
    {
      accessorKey: "region",
      header: "region",
      cell: ({ row }: { row: any }) => <p>{row.getValue("region") ?? null}</p>,
    },
    {
      accessorKey: "country",
      header: "Country",
      cell: ({ row }: { row: any }) => <p>{row.getValue("country") ?? null}</p>,
    },
    {
      accessorKey: "leadCurrency",
      header: "Lead Currency",
      cell: ({ row }: { row: any }) => <p>{row.getValue("leadCurrency")}</p>,
    },
    {
      accessorKey: "estimatedAmount",
      header: "Estimated Amount",
      cell: ({ row }: { row: any }) => <p>{row.getValue("estimatedAmount")}</p>,
    },
    {
      accessorKey: "quotedAmount",
      header: "Quoted Amount",
      cell: ({ row }: { row: any }) => <p>{row.getValue("quotedAmount")}</p>,
    },
    {
      accessorKey: "finalAmount",
      header: "Final Amount",
      cell: ({ row }: { row: any }) => <p>{row.getValue("finalAmount")}</p>,
    },
    {
      accessorKey: "fiscalPeriodByYear",
      header: "Fiscal Period by Year",
      options: ["Q1", "Q2", "Q3", "Q4"],
      cell: ({ row }: { row: any }) => (
        <p>{row.getValue("fiscalPeriodByYear")}</p>
      ),
    },
    {
      accessorKey: "leadFiscalPeriod",
      header: "Lead Fiscal Period",
      options: ["Q1", "Q2", "Q3", "Q4"],
      cell: ({ row }: { row: any }) => (
        <p>{row.getValue("leadFiscalPeriod")}</p>
      ),
    },
    {
      accessorKey: "assignedToSalesTeam",
      header: "Assigned To Sales Team",
      cell: ({ row }: { row: any }) => (
        <p>{row.getValue("assignedToSalesTeam") ?? null}</p>
      ),
    },
    {
      accessorKey: "domains",
      header: "Domains",
      cell: ({ row }: { row: any }) => <p>{row.getValue("domains") ?? null}</p>,
    },
    {
      accessorKey: "deploymentType",
      header: "Deployment Type",
      cell: ({ row }: { row: any }) => (
        <p>{row.getValue("deploymentType") ?? null}</p>
      ),
    },
    {
      accessorKey: "leadOverview",
      header: "Lead Overview",
      cell: ({ row }: { row: any }) => (
        <p>{row.getValue("leadOverview") ?? null}</p>
      ),
    },
    {
      accessorKey: "leadGeneratedMonth",
      header: "Lead Generated Month",
      options: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      cell: ({ row }: { row: any }) => (
        <p>{row.getValue("leadGeneratedMonth")}</p>
      ),
    },
    {
      accessorKey: "createDate",
      header: "Create Date",
      cell: ({ row }: { row: any }) => (
        <p>{row.getValue("createDate") ?? "Auto Creation Date"}</p>
      ),
    },
    {
      accessorKey: "createBy",
      header: "Create By",
      cell: ({ row }: { row: any }) => (
        <p>{row.getValue("createBy") ?? "Auto Creation Name"}</p>
      ),
    },
    {
      accessorKey: "editDate",
      header: "Edit Date",
      cell: ({ row }: { row: any }) => (
        <p>{row.getValue("editDate") ?? "Auto Edit Date"}</p>
      ),
    },
    {
      accessorKey: "editBy",
      header: "Edit By",
      cell: ({ row }: { row: any }) => (
        <p>{row.getValue("editBy") ?? "Auto Edit Name"}</p>
      ),
    },
    {
      id: "actions",
      cell: ({ row }:{row:any}) => (
        <Button
        >
          Delete
        </Button>
      ),
    },
  ]

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
  const [editingCell, setEditingCell] = React.useState<{
    row: number;
    column: string;
    value: string;
    options?: string[];
  } | null>(null);
  const [isAddLeadModalOpen, setIsAddLeadModalOpen] = React.useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [deleteInput, setDeleteInput] = React.useState("");
  const [selectedRow, setSelectedRow] = React.useState<Lead | null>(null);

  const isClickableColumn = (columnId: string) => {
    const nonClickableColumns = [
      "select",
      "id_",
      "editBy",
      "editDate",
      "createBy",
      "createDate",
      "actions",
    ];
    return !nonClickableColumns.includes(columnId);
  };
  const handleRowSelection = (row: Lead) => {
    setSelectedRow((prevSelected) =>
      prevSelected?.id_ === row.id_ ? null : row
    );
  };

  const handleDeleteClick = (row: Lead) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeleteInput("");
  };

  const handleDelete = async () => {
    if (deleteInput === "DONE" && selectedRow) {
      try {
        const { error } = await supabase
          .from("leads")
          .delete()
          .eq("id_", selectedRow.id_);
        if (error) {
          console.error("Error deleting data from Supabase:", error);
        } else {
          // Remove the deleted row from local state
          setData(data.filter((row) => row.id_ !== selectedRow.id_));
          setChange(true);
          setSelectedRow(null);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    }
    closeDeleteModal();
  };
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
      const sortedData = (data || []).sort((a, b) => {
        for (const sort of sorting) {
          const { id, desc } = sort;
          if (a[id as keyof Lead] < b[id as keyof Lead]) return desc ? 1 : -1;
          if (a[id as keyof Lead] > b[id as keyof Lead]) return desc ? -1 : 1;
        }
        return 0;
      });

      setData(sortedData);
      setIsLoading(false);
    };

    fetchData();

    const subscription = supabase
      .channel("leads")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "leads" },
        (payload) => {
          console.log("New data inserted:", payload);
          fetchData();
        }
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "leads" },
        (payload) => {
          console.log("Data updated:", payload);
          fetchData();
        }
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "leads" },
        (payload) => {
          console.log("Data deleted:", payload);
          fetchData();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [change, sorting]);

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
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleSaveEdit = async (value: string) => {
    if (editingCell) {
      setChange(false);
      const updatedData = [...data];

      // Get the current date and time in the desired format
      const currentDate = new Date();
      const formattedDate =
        +`${currentDate.getDate().toString().padStart(2, "0")} ` + // Get the last 2 digits of the year (yy)
        `${(currentDate.getMonth() + 1).toString().padStart(2, "0")}/` + // Get the month, add 1 since months are zero-indexed
        `${currentDate.getFullYear().toString().slice(-2)}/` + // Get the day of the month
        `${currentDate.getHours().toString().padStart(2, "0")}:` + // Get the hour (24-hour format)
        `${currentDate.getMinutes().toString().padStart(2, "0")}`; // Get the minutes

      console.log(formattedDate);
      const userData = localStorage.getItem("user");

      let editBy = "Unknown";
      if (userData) {
        const userJson = JSON.parse(userData);
        const email = userJson.user.email;
        try {
          const { data: profileData, error } = await supabase
            .from("profiles")
            .select("name, email")
            .eq("email", email)
            .single();
          if (error) {
            console.error("Error fetching profile from database:", error);
          } else {
            editBy = profileData?.name || email;
          }
        } catch (err) {
          console.error("Unexpected error fetching profile:", err);
        }
      }

      const updatedRow = {
        ...updatedData[editingCell.row],
        [editingCell.column]: value,
        editDate: formattedDate,
        editBy: editBy,
      };
      updatedData[editingCell.row] = updatedRow;

      try {
        const { error } = await supabase
          .from("leads")
          .update({
            [editingCell.column]: value,
            editDate: updatedRow.editDate,
            editBy: updatedRow.editBy,
          })
          .eq("id_", updatedRow.id_);
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

    // Retrieve email from localStorage
    const userData = localStorage.getItem("user");
    console.log(userData);
    let userEmail = "user@example.com"; // Default email, if not found in localStorage
    if (userData) {
      const temp = JSON.parse(userData);
      userEmail = temp.user.email; // Assuming user email is stored in localStorage
    }

    // Fetch user's name based on the email from the "profiles" table
    let userName = userEmail; // Default to email if name not available
    try {
      const { data: profiles, error } = await supabase
        .from("profiles")
        .select("name, email") // Fetch name and email fields
        .eq("email", userEmail) // Use email from localStorage
        .single(); // Get the first result, assuming email is unique

      if (error) {
        console.error("Error fetching profile data:", error);
      } else {
        // If name is available, use it; otherwise, fallback to email
        userName = profiles?.name || profiles?.email || userEmail;
      }
    } catch (err) {
      console.error("Unexpected error fetching profile data:", err);
    }

    // Prepare new lead data
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
      createBy: userName, // Use name or email for createBy
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
      editBy: userName, // Use name or email for editBy
    };

    // Insert the lead data into the database
    try {
      const { error: insertError } = await supabase
        .from("leads")
        .insert([newLead]);
      if (insertError) {
        console.error("Error inserting data into Supabase:", insertError);
      } else {
        console.log("New lead added:", newLead);
        data.push(newLead);
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
                    {header.isPlaceholder ? null : (
                      <div
                        className="cursor-pointer flex flex-nowrap min-w-28"
                        onClick={() => {
                          if(header.id!="select"){
                           const isDesc =
                             header.column.getIsSorted() === "desc";
                           setSorting([
                             {
                               id: header.id,
                               desc: !isDesc,
                             },
                           ]); 
                          }
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getIsSorted() ? (
                          <span>
                            {header.column.getIsSorted() === "desc"
                              ? " ↓"
                              : " ↑"}
                          </span>
                        ) : null}
                      </div>
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => handleRowSelection(row.original as Lead)}
                className={
                  selectedRow?.id_ === row.original.id_ ? "bg-blue-100" : ""
                }
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="min-w-32 cursor-pointer">
                    <div
                      className={`w-full ${
                        isClickableColumn(cell.column.id)
                          ? "cursor-pointer"
                          : ""
                      }`}
                      onClick={(e) => {
                        if (isClickableColumn(cell.column.id)) {
                          handleCellClick(
                            row.index,
                            cell.column.id,
                            cell.getValue() as string,
                            (cell.column.columnDef as any).options
                          );
                        }
                        else if (cell.column.id == "actions") {
                          {
                            e.stopPropagation();
                            handleDeleteClick(row.original);
                          }
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
      />{" "}
      <Dialog open={isDeleteModalOpen} onOpenChange={closeDeleteModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <p>Are you sure you want to delete this lead?</p>
            <p>Please type "DONE" to confirm:</p>
            <Input
              value={deleteInput}
              onChange={(e) => setDeleteInput(e.target.value)}
              placeholder="Type DONE to confirm"
            />
            <div className="mt-4">
              <Button onClick={handleDelete}>Delete</Button>
              <Button onClick={closeDeleteModal} variant="outline">
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function useEffect(arg0: () => () => void, arg1: boolean[]) {
  throw new Error("Function not implemented.");
}
