"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Grip, Plus, Trash } from "lucide-react";

type FieldType =
  | "text"
  | "email"
  | "number"
  | "textarea"
  | "select"
  | "checkbox"
  | "radio"
  | "date"
  | "file";

interface FormField {
  id: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
}

export function CreateCustomFormModal() {
  const [open, setOpen] = useState(false);
  const [fields, setFields] = useState<FormField[]>([
    {
      id: "f1",
      type: "text",
      label: "Full Name",
      placeholder: "Enter your full name",
      required: true,
    },
  ]);

  const addField = () => {
    const newId = `f${fields.length + 1}`;
    setFields([
      ...fields,
      {
        id: newId,
        type: "text",
        label: "",
        placeholder: "",
        required: false,
      },
    ]);
  };

  const removeField = (id: string) => {
    if (fields.length > 1) {
      setFields(fields.filter((f) => f.id !== id));
    }
  };

  const updateField = (id: string, updates: Partial<FormField>) => {
    setFields(
      fields.map((f) => {
        if (f.id === id) {
          return { ...f, ...updates };
        }
        return f;
      })
    );
  };

  const addOption = (fieldId: string) => {
    setFields(
      fields.map((f) => {
        if (f.id === fieldId) {
          const options = f.options || [];
          return { ...f, options: [...options, ""] };
        }
        return f;
      })
    );
  };

  const updateOption = (
    fieldId: string,
    optionIndex: number,
    value: string
  ) => {
    setFields(
      fields.map((f) => {
        if (f.id === fieldId && f.options) {
          const newOptions = [...f.options];
          newOptions[optionIndex] = value;
          return { ...f, options: newOptions };
        }
        return f;
      })
    );
  };

  const removeOption = (fieldId: string, optionIndex: number) => {
    setFields(
      fields.map((f) => {
        if (f.id === fieldId && f.options && f.options.length > 2) {
          const newOptions = [...f.options];
          newOptions.splice(optionIndex, 1);
          return { ...f, options: newOptions };
        }
        return f;
      })
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., send data to an API
    console.log("Custom form created with fields:", fields);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Plus className="mr-2 h-4 w-4" />
          Create New Form
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Create Custom Form</DialogTitle>
          <DialogDescription>
            Create a custom form for your event.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="form-name">Form Name</Label>
              <Input id="form-name" placeholder="Enter form name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="form-description">Description</Label>
              <Textarea
                id="form-description"
                placeholder="Enter form description"
              />
            </div>

            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <Label>Form Fields</Label>
              </div>

              {fields.map((field, index) => (
                <div key={field.id} className="rounded-md border p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Grip className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">Field {index + 1}</span>
                    {fields.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeField(field.id)}
                        className="ml-auto h-8 w-8"
                      >
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Remove field</span>
                      </Button>
                    )}
                  </div>

                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor={`label-${field.id}`}>Field Label</Label>
                      <Input
                        id={`label-${field.id}`}
                        value={field.label}
                        onChange={(e) =>
                          updateField(field.id, { label: e.target.value })
                        }
                        placeholder="Enter field label"
                        required
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor={`type-${field.id}`}>Field Type</Label>
                      <Select
                        value={field.type}
                        onValueChange={(value) => {
                          const newType = value as FieldType;
                          const updates: Partial<FormField> = { type: newType };

                          // Initialize options for select and radio
                          if (
                            (newType === "select" || newType === "radio") &&
                            (!field.options || field.options.length === 0)
                          ) {
                            updates.options = ["", ""];
                          }

                          updateField(field.id, updates);
                        }}
                      >
                        <SelectTrigger id={`type-${field.id}`}>
                          <SelectValue placeholder="Select field type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="text">Text</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="number">Number</SelectItem>
                          <SelectItem value="textarea">Text Area</SelectItem>
                          <SelectItem value="select">Dropdown</SelectItem>
                          <SelectItem value="checkbox">Checkbox</SelectItem>
                          <SelectItem value="radio">Radio Buttons</SelectItem>
                          <SelectItem value="date">Date</SelectItem>
                          <SelectItem value="file">File Upload</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {field.type !== "checkbox" &&
                      field.type !== "radio" &&
                      field.type !== "select" && (
                        <div className="grid gap-2">
                          <Label htmlFor={`placeholder-${field.id}`}>
                            Placeholder
                          </Label>
                          <Input
                            id={`placeholder-${field.id}`}
                            value={field.placeholder || ""}
                            onChange={(e) =>
                              updateField(field.id, {
                                placeholder: e.target.value,
                              })
                            }
                            placeholder="Enter placeholder text"
                          />
                        </div>
                      )}

                    {(field.type === "select" || field.type === "radio") && (
                      <div className="grid gap-2">
                        <Label>Options</Label>
                        {(field.options || []).map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className="flex items-center gap-2"
                          >
                            <Input
                              value={option}
                              onChange={(e) =>
                                updateOption(
                                  field.id,
                                  optionIndex,
                                  e.target.value
                                )
                              }
                              placeholder={`Option ${optionIndex + 1}`}
                              required
                            />
                            {(field.options?.length || 0) > 2 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() =>
                                  removeOption(field.id, optionIndex)
                                }
                                className="h-8 w-8"
                              >
                                <Trash className="h-4 w-4" />
                                <span className="sr-only">Remove option</span>
                              </Button>
                            )}
                          </div>
                        ))}
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => addOption(field.id)}
                          className="mt-2"
                        >
                          <Plus className="mr-2 h-4 w-4" />
                          Add Option
                        </Button>
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      <Switch
                        id={`required-${field.id}`}
                        checked={field.required}
                        onCheckedChange={(checked) =>
                          updateField(field.id, { required: checked })
                        }
                      />
                      <Label htmlFor={`required-${field.id}`}>
                        Required field
                      </Label>
                    </div>
                  </div>
                </div>
              ))}

              <Button type="button" variant="outline" onClick={addField}>
                <Plus className="mr-2 h-4 w-4" />
                Add Field
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center space-x-2">
                <Switch id="collect-emails" defaultChecked />
                <Label htmlFor="collect-emails">
                  Send form responses via email
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="one-response" defaultChecked />
                <Label htmlFor="one-response">
                  Limit to one response per person
                </Label>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Create Form</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
