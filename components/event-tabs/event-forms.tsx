"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreateCustomFormModal } from "@/components/modals/create-custom-form-modal";

export function EventForms() {
  const forms = [
    {
      id: "1",
      name: "Registration Form",
      fields: 12,
      responses: 450,
      status: "active",
    },
    {
      id: "2",
      name: "Speaker Application",
      fields: 8,
      responses: 32,
      status: "active",
    },
    {
      id: "3",
      name: "Post-Event Feedback",
      fields: 10,
      responses: 0,
      status: "draft",
    },
    {
      id: "4",
      name: "Workshop Registration",
      fields: 6,
      responses: 78,
      status: "active",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Custom Forms</h2>
        <CreateCustomFormModal />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {forms.map((form) => (
          <Card key={form.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>{form.name}</CardTitle>
                <Badge
                  variant={form.status === "active" ? "default" : "outline"}
                >
                  {form.status.charAt(0).toUpperCase() + form.status.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Fields</p>
                    <p className="text-2xl font-semibold">{form.fields}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Responses</p>
                    <p className="text-2xl font-semibold">{form.responses}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Preview
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        <Card className="flex h-[180px] items-center justify-center border-dashed">
          <CreateCustomFormModal />
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Form Builder</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex h-[400px] items-center justify-center border rounded-md">
            <div className="text-center">
              <h3 className="text-lg font-medium">Drag & Drop Form Builder</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Select a form to edit or create a new one to use the form
                builder
              </p>
              <CreateCustomFormModal />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
