import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: string) => void;
  value: string;
  column: {
    id: string;
    header: string;
  };
  options?: string[];
}

export function EditModal({
  isOpen,
  onClose,
  onSave,
  value,
  column,
  options,
}: EditModalProps) {
  const [editedValue, setEditedValue] = React.useState(value);

  const handleSave = () => {
    onSave(editedValue);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit {column.header}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {options ? (
            <Select value={editedValue} onValueChange={setEditedValue}>
              <SelectTrigger>
                <SelectValue placeholder={`Select ${column.header}`} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <Input
              id={column.id}
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
              className="col-span-3"
            />
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Done</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
