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
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EditModal } from "@/components/edit-model";

type Lead = {
  id: string;
  accountName: string;
  leadSource: string;
  title: string;
  stage: string;
  status: string;
  leadOwner: string;
  industry: string;
  services: string;
  products: string;
  rating: string;
  leadFiscalPeriod: string;
  assignedToSalesTeam: string;
  domains: string;
  deploymentType: string;
  leadOverview: string;
  leadGeneratedMonth: string;
  createDate: string;
  createBy: string;
  editDate: string;
  editBy: string;
};

const data: Lead[] = [
  {
    id: "1",
    accountName: "Acme Corp",
    leadSource: "Trade Show",
    title: "New Lead",
    stage: "Demo",
    status: "Qualified",
    leadOwner: "John Doe",
    industry: "Agriculture",
    services: "Consulting",
    products: "Product A",
    rating: "Hot",
    leadFiscalPeriod: "Q2",
    assignedToSalesTeam: "Team A",
    domains: "Domain 1",
    deploymentType: "Cloud",
    leadOverview: "Potential big client",
    leadGeneratedMonth: "January",
    createDate: "2023-01-15",
    createBy: "System",
    editDate: "2023-01-20",
    editBy: "Jane Smith",
  },
  // Add more sample data here
];

export const columns: ColumnDef<Lead>[] = [
  {
    id: "select",
    header: ({ table }:{table :any}) => (
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
    accessorKey: "accountName",
    header: "Account Name",
    cell: ({ row }: { row: any }) => (
      <Input defaultValue={row.getValue("accountName")} />
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
    ],
    cell: ({ row }: { row: any }) => row.getValue("leadSource"),
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }: { row: any }) => (
      <Input defaultValue={row.getValue("title")} />
    ),
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
    cell: ({ row }: { row: any }) => row.getValue("stage"),
  },
  {
    accessorKey: "status",
    header: "Status",
    options: ["New", "Qualified", "Working", "Nurturing"],
    cell: ({ row }: { row: any }) => row.getValue("status"),
  },
  {
    accessorKey: "leadOwner",
    header: "Lead Owner",
    cell: ({ row }: { row: any }) => (
      <Input defaultValue={row.getValue("leadOwner")} />
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
    ],
    cell: ({ row }: { row: any }) => row.getValue("industry"),
  },
  {
    accessorKey: "services",
    header: "Services",
    cell: ({ row }: { row: any }) => (
      <Input defaultValue={row.getValue("services")} />
    ),
  },
  {
    accessorKey: "products",
    header: "Products",
    cell: ({ row }: { row: any }) => (
      <Input defaultValue={row.getValue("products")} />
    ),
  },
  {
    accessorKey: "rating",
    header: "Rating",
    options: ["Warm", "Cold", "Hot"],
    cell: ({ row }: { row: any }) => row.getValue("rating"),
  },
  {
    accessorKey: "leadFiscalPeriod",
    header: "Lead Fiscal Period",
    options: ["Q1", "Q2", "Q3", "Q4"],
    cell: ({ row }: { row: any }) => row.getValue("leadFiscalPeriod"),
  },
  {
    accessorKey: "assignedToSalesTeam",
    header: "Assigned To Sales Team",
    cell: ({ row }: { row: any }) => (
      <Input defaultValue={row.getValue("assignedToSalesTeam")} />
    ),
  },
  {
    accessorKey: "domains",
    header: "Domains",
    cell: ({ row }: { row: any }) => (
      <Input defaultValue={row.getValue("domains")} />
    ),
  },
  {
    accessorKey: "deploymentType",
    header: "Deployment Type",
    cell: ({ row }: { row: any }) => (
      <Input defaultValue={row.getValue("deploymentType")} />
    ),
  },
  {
    accessorKey: "leadOverview",
    header: "Lead Overview",
    cell: ({ row }: { row: any }) => (
      <Input defaultValue={row.getValue("leadOverview")} />
    ),
  },
  {
    accessorKey: "leadGeneratedMonth",
    header: "Lead Generated Month",
    options: ["January", "February", "March", "April", "May"],
    cell: ({ row }: { row: any }) => row.getValue("leadGeneratedMonth"),
  },
  {
    accessorKey: "createDate",
    header: "Create Date",
    cell: ({ row }: { row: any }) => row.getValue("createDate"),
  },
  {
    accessorKey: "createBy",
    header: "Create By",
    cell: ({ row }: { row: any }) => row.getValue("createBy"),
  },
  {
    accessorKey: "editDate",
    header: "Edit Date",
    cell: ({ row }: { row: any }) => row.getValue("editDate"),
  },
  {
    accessorKey: "editBy",
    header: "Edit By",
    cell: ({ row }: { row: any }) => row.getValue("editBy"),
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

  const [editingCell, setEditingCell] = React.useState<{
    row: number;
    column: string;
    value: string;
    options?: string[];
  } | null>(null);

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

  const handleCellClick = (
    row: number,
    column: string,
    value: string,
    options?: string[]
  ) => {
    setEditingCell({ row, column, value, options });
  };

  const handleSaveEdit = (value: string) => {
    if (editingCell) {
      const updatedData = [...data];
      updatedData[editingCell.row] = {
        ...updatedData[editingCell.row],
        [editingCell.column]: value,
      };
      // Here you would typically update your data source or make an API call
      console.log("Updated data:", updatedData);
    }
    setEditingCell(null);
  };

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
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
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="p-2">
                      <div
                        className="w-fit cursor-pointer"
                        onClick={() =>
                          handleCellClick(
                            row.index,
                            cell.column.id,
                            cell.getValue() as string,
                            (cell.column.columnDef as any).options
                          )
                        }
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
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
    </div>
  );
}
