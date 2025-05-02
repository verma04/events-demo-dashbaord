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

type QuestionType =
  | "text"
  | "rating"
  | "multiple_choice"
  | "checkbox"
  | "dropdown";

interface Question {
  id: string;
  type: QuestionType;
  text: string;
  required: boolean;
  options?: string[];
}

export function CreateFeedbackFormModal() {
  const [open, setOpen] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: "q1",
      type: "rating",
      text: "How would you rate the event overall?",
      required: true,
    },
    {
      id: "q2",
      type: "text",
      text: "What did you like most about the event?",
      required: false,
    },
  ]);

  const addQuestion = () => {
    const newId = `q${questions.length + 1}`;
    setQuestions([
      ...questions,
      {
        id: newId,
        type: "text",
        text: "",
        required: false,
      },
    ]);
  };

  const removeQuestion = (id: string) => {
    if (questions.length > 1) {
      setQuestions(questions.filter((q) => q.id !== id));
    }
  };

  const updateQuestion = (id: string, updates: Partial<Question>) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === id) {
          return { ...q, ...updates };
        }
        return q;
      })
    );
  };

  const addOption = (questionId: string) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId) {
          const options = q.options || [];
          return { ...q, options: [...options, ""] };
        }
        return q;
      })
    );
  };

  const updateOption = (
    questionId: string,
    optionIndex: number,
    value: string
  ) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId && q.options) {
          const newOptions = [...q.options];
          newOptions[optionIndex] = value;
          return { ...q, options: newOptions };
        }
        return q;
      })
    );
  };

  const removeOption = (questionId: string, optionIndex: number) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId && q.options && q.options.length > 2) {
          const newOptions = [...q.options];
          newOptions.splice(optionIndex, 1);
          return { ...q, options: newOptions };
        }
        return q;
      })
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., send data to an API
    console.log("Feedback form created with questions:", questions);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">Create New Feedback Form</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Create Feedback Form</DialogTitle>
          <DialogDescription>
            Create a new feedback form for your event.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="form-title">Form Title</Label>
              <Input id="form-title" placeholder="Enter form title" required />
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
                <Label>Questions</Label>
              </div>

              {questions.map((question, index) => (
                <div key={question.id} className="rounded-md border p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Grip className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">Question {index + 1}</span>
                    {questions.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeQuestion(question.id)}
                        className="ml-auto h-8 w-8"
                      >
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Remove question</span>
                      </Button>
                    )}
                  </div>

                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor={`question-${question.id}`}>
                        Question Text
                      </Label>
                      <Input
                        id={`question-${question.id}`}
                        value={question.text}
                        onChange={(e) =>
                          updateQuestion(question.id, { text: e.target.value })
                        }
                        placeholder="Enter question text"
                        required
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor={`type-${question.id}`}>
                        Question Type
                      </Label>
                      <Select
                        value={question.type}
                        onValueChange={(value) => {
                          const newType = value as QuestionType;
                          const updates: Partial<Question> = { type: newType };

                          // Initialize options for multiple choice, checkbox, and dropdown
                          if (
                            (newType === "multiple_choice" ||
                              newType === "checkbox" ||
                              newType === "dropdown") &&
                            (!question.options || question.options.length === 0)
                          ) {
                            updates.options = ["", ""];
                          }

                          updateQuestion(question.id, updates);
                        }}
                      >
                        <SelectTrigger id={`type-${question.id}`}>
                          <SelectValue placeholder="Select question type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="text">Text Input</SelectItem>
                          <SelectItem value="rating">Rating Scale</SelectItem>
                          <SelectItem value="multiple_choice">
                            Multiple Choice
                          </SelectItem>
                          <SelectItem value="checkbox">Checkbox</SelectItem>
                          <SelectItem value="dropdown">Dropdown</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {(question.type === "multiple_choice" ||
                      question.type === "checkbox" ||
                      question.type === "dropdown") && (
                      <div className="grid gap-2">
                        <Label>Options</Label>
                        {(question.options || []).map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className="flex items-center gap-2"
                          >
                            <Input
                              value={option}
                              onChange={(e) =>
                                updateOption(
                                  question.id,
                                  optionIndex,
                                  e.target.value
                                )
                              }
                              placeholder={`Option ${optionIndex + 1}`}
                              required
                            />
                            {(question.options?.length || 0) > 2 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() =>
                                  removeOption(question.id, optionIndex)
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
                          onClick={() => addOption(question.id)}
                          className="mt-2"
                        >
                          <Plus className="mr-2 h-4 w-4" />
                          Add Option
                        </Button>
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      <Switch
                        id={`required-${question.id}`}
                        checked={question.required}
                        onCheckedChange={(checked) =>
                          updateQuestion(question.id, { required: checked })
                        }
                      />
                      <Label htmlFor={`required-${question.id}`}>
                        Required question
                      </Label>
                    </div>
                  </div>
                </div>
              ))}

              <Button type="button" variant="outline" onClick={addQuestion}>
                <Plus className="mr-2 h-4 w-4" />
                Add Question
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center space-x-2">
                <Switch id="collect-emails" defaultChecked />
                <Label htmlFor="collect-emails">Collect email addresses</Label>
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
