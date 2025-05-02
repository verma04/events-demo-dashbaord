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
import { Switch } from "@/components/ui/switch";
import { Plus, Trash } from "lucide-react";

export function CreatePollModal() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<string[]>(["", ""]);

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (index: number) => {
    if (options.length > 2) {
      const newOptions = [...options];
      newOptions.splice(index, 1);
      setOptions(newOptions);
    }
  };

  const updateOption = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., send data to an API
    console.log("Poll created with options:", options);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">Create New Poll</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Poll</DialogTitle>
          <DialogDescription>
            Create a new poll for your event attendees.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="poll-question">Poll Question</Label>
              <Input
                id="poll-question"
                placeholder="Enter your question"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="poll-description">Description (Optional)</Label>
              <Textarea
                id="poll-description"
                placeholder="Add additional context for your question"
              />
            </div>
            <div className="grid gap-2">
              <Label>Poll Options</Label>
              {options.map((option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    value={option}
                    onChange={(e) => updateOption(index, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                    required
                  />
                  {options.length > 2 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeOption(index)}
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
                onClick={addOption}
                className="mt-2"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Option
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center space-x-2">
                <Switch id="multiple-choice" />
                <Label htmlFor="multiple-choice">
                  Allow multiple selections
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="anonymous-poll" />
                <Label htmlFor="anonymous-poll">Anonymous responses</Label>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center space-x-2">
                <Switch id="show-results" defaultChecked />
                <Label htmlFor="show-results">
                  Show results to participants
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="active-poll" defaultChecked />
                <Label htmlFor="active-poll">Activate poll immediately</Label>
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
            <Button type="submit">Create Poll</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
