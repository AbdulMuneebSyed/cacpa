import type React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (leadData: LeadData) => void;
}

export interface LeadData {
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
  region: string;
  country: string;
  leadCurrency: string;
  estimatedAmount: string;
  quotedAmount: string;
  finalAmount: string;
  fiscalPeriodByYear: string;
  leadFiscalPeriod: string;
  assignedToSalesTeam: string;
  domains: string;
  deploymentType: string;
  leadOverview: string;
  leadGeneratedMonth: string;
}

const leadSourceOptions = [
  "Trade Show",
  "Account Mining",
  "Email Campaign",
  "Partner",
  "Tender Portal",
  "Single Source",
  "Advertisement",
  "Cold Calls",
  "Customer Event",
  "Employee Referral",
  "LinkedIn",
  "Vendor Portal",
  "Website",
  "Personal Contact",
  "Others",
];
const stageOptions = [
  "Vendor Registration",
  "Demo",
  "POC",
  "Technical Clarification",
  "Proposal Submitted",
  "NEGOTIATION",
  "DEALS WON",
  "PROPOSAL SUBMITTED",
  "BQ SUBMITTED",
  "RFP",
  "RFI",
  "RFQ",
  "On Hold",
];
const statusOptions = [
  "New",
  "Qualified",
  "Working",
  "Nurturing",
  "Converted Opportunity",
  "On Hold",
  "Others",
];
const industryOptions = [
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
];
const ratingOptions = ["Warm", "Cold", "Hot"];
const fiscalPeriodOptions = ["Q1", "Q2", "Q3", "Q4"];
const monthOptions = [
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
];

export function LeadForm({ isOpen, onClose, onSave }: LeadFormProps) {
  const [leadData, setLeadData] = useState<LeadData>({
    accountName: "",
    leadSource: "",
    title: "",
    stage: "",
    status: "",
    leadOwner: "",
    industry: "",
    services: "",
    products: "",
    rating: "",
    region: "",
    country: "",
    leadCurrency: "",
    estimatedAmount: "",
    quotedAmount: "",
    finalAmount: "",
    fiscalPeriodByYear: "",
    leadFiscalPeriod: "",
    assignedToSalesTeam: "",
    domains: "",
    deploymentType: "",
    leadOverview: "",
    leadGeneratedMonth: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLeadData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setLeadData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(leadData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Lead</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="accountName" className="text-right">
                Account Name
              </Label>
              <Input
                id="accountName"
                name="accountName"
                value={leadData.accountName}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="leadSource" className="text-right">
                Lead Source
              </Label>
              <Select
                onValueChange={handleSelectChange("leadSource")}
                value={leadData.leadSource}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select lead source" />
                </SelectTrigger>
                <SelectContent>
                  {leadSourceOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                name="title"
                value={leadData.title}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="stage" className="text-right">
                Stage
              </Label>
              <Select
                onValueChange={handleSelectChange("stage")}
                value={leadData.stage}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select stage" />
                </SelectTrigger>
                <SelectContent>
                  {stageOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <Select
                onValueChange={handleSelectChange("status")}
                value={leadData.status}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="leadOwner" className="text-right">
                Lead Owner
              </Label>
              <Input
                id="leadOwner"
                name="leadOwner"
                value={leadData.leadOwner}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="industry" className="text-right">
                Industry
              </Label>
              <Select
                onValueChange={handleSelectChange("industry")}
                value={leadData.industry}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent className="h-60 overflow-y-scroll">
                  {industryOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="services" className="text-right">
                Services
              </Label>
              <Input
                id="services"
                name="services"
                value={leadData.services}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="products" className="text-right">
                Products
              </Label>
              <Input
                id="products"
                name="products"
                value={leadData.products}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="rating" className="text-right">
                Rating
              </Label>
              <Select
                onValueChange={handleSelectChange("rating")}
                value={leadData.rating}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select rating" />
                </SelectTrigger>
                <SelectContent>
                  {ratingOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="region" className="text-right">
                Region
              </Label>
              <Input
                id="region"
                name="region"
                value={leadData.region}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="country" className="text-right">
                Country
              </Label>
              <Input
                id="country"
                name="country"
                value={leadData.country}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="leadCurrency" className="text-right">
                Lead Currency
              </Label>
              <Input
                id="leadCurrency"
                name="leadCurrency"
                value={leadData.leadCurrency}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="estimatedAmount" className="text-right">
                Estimated Amount
              </Label>
              <Input
                id="estimatedAmount"
                name="estimatedAmount"
                value={leadData.estimatedAmount}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quotedAmount" className="text-right">
                Quoted Amount
              </Label>
              <Input
                id="quotedAmount"
                name="quotedAmount"
                value={leadData.quotedAmount}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="finalAmount" className="text-right">
                Final Amount
              </Label>
              <Input
                id="finalAmount"
                name="finalAmount"
                value={leadData.finalAmount}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fiscalPeriodByYear" className="text-right">
                Fiscal Period By Year
              </Label>
              <Input
                id="fiscalPeriodByYear"
                name="fiscalPeriodByYear"
                value={leadData.fiscalPeriodByYear}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="leadFiscalPeriod" className="text-right">
                Lead Fiscal Period
              </Label>
              <Select
                onValueChange={handleSelectChange("leadFiscalPeriod")}
                value={leadData.leadFiscalPeriod}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select fiscal period" />
                </SelectTrigger>
                <SelectContent>
                  {fiscalPeriodOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="assignedToSalesTeam" className="text-right">
                Assigned To Sales Team
              </Label>
              <Input
                id="assignedToSalesTeam"
                name="assignedToSalesTeam"
                value={leadData.assignedToSalesTeam}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="domains" className="text-right">
                Domains
              </Label>
              <Input
                id="domains"
                name="domains"
                value={leadData.domains}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="deploymentType" className="text-right">
                Deployment Type
              </Label>
              <Input
                id="deploymentType"
                name="deploymentType"
                value={leadData.deploymentType}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="leadOverview" className="text-right">
                Lead Overview
              </Label>
              <Input
                id="leadOverview"
                name="leadOverview"
                value={leadData.leadOverview}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="leadGeneratedMonth" className="text-right">
                Lead Generated Month
              </Label>
              <Select
                onValueChange={handleSelectChange("leadGeneratedMonth")}
                value={leadData.leadGeneratedMonth}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent className="h-44 overflow-y-scroll">
                  {monthOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save Lead</Button>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
