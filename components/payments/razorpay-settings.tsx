"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Plus, Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RazorpayKey {
  id: string;
  name: string;
  key: string;
  secret: string;
  isActive: boolean;
}

export function RazorpaySettings() {
  const [keys, setKeys] = useState<RazorpayKey[]>([
    {
      id: "1",
      name: "Production",
      key: "rzp_live_xxxxxxxxxxxxxxx",
      secret: "••••••••••••••••••••••••",
      isActive: true,
    },
    {
      id: "2",
      name: "Test",
      key: "rzp_test_xxxxxxxxxxxxxxx",
      secret: "••••••••••••••••••••••••",
      isActive: false,
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newKey, setNewKey] = useState<Omit<RazorpayKey, "id">>({
    name: "",
    key: "",
    secret: "",
    isActive: false,
  });

  const addKey = () => {
    if (newKey.name && newKey.key && newKey.secret) {
      const id = `${keys.length + 1}`;
      setKeys([...keys, { ...newKey, id }]);
      setNewKey({
        name: "",
        key: "",
        secret: "",
        isActive: false,
      });
      setShowAddForm(false);
    }
  };

  const removeKey = (id: string) => {
    setKeys(keys.filter((key) => key.id !== id));
  };

  const toggleActive = (id: string) => {
    setKeys(
      keys.map((key) => {
        if (key.id === id) {
          return { ...key, isActive: true };
        }
        return { ...key, isActive: false };
      })
    );
  };

  return (
    <div className="space-y-6">
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Payment Gateway Required</AlertTitle>
        <AlertDescription>
          You need to set up a payment gateway to accept payments for your
          events. Please configure your Razorpay integration below.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Razorpay Integration</CardTitle>
          <CardDescription>
            Configure your Razorpay payment gateway integration.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {keys.map((key) => (
              <div
                key={key.id}
                className="flex flex-col gap-4 rounded-md border p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{key.name}</h3>
                    {key.isActive && <Badge>Active</Badge>}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeKey(key.id)}
                  >
                    <Trash className="h-4 w-4" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>API Key</Label>
                    <Input value={key.key} readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label>API Secret</Label>
                    <Input value={key.secret} type="password" readOnly />
                  </div>
                </div>
                {!key.isActive && (
                  <Button
                    variant="outline"
                    onClick={() => toggleActive(key.id)}
                  >
                    Set as Active
                  </Button>
                )}
              </div>
            ))}
          </div>

          {showAddForm ? (
            <div className="rounded-md border p-4">
              <h3 className="mb-4 font-medium">Add New Key</h3>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="key-name">Name</Label>
                  <Input
                    id="key-name"
                    value={newKey.name}
                    onChange={(e) =>
                      setNewKey({ ...newKey, name: e.target.value })
                    }
                    placeholder="e.g., Production, Test, Event Specific"
                    required
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="api-key">API Key</Label>
                    <Input
                      id="api-key"
                      value={newKey.key}
                      onChange={(e) =>
                        setNewKey({ ...newKey, key: e.target.value })
                      }
                      placeholder="rzp_live_xxxxxxxxxxxxxxx"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="api-secret">API Secret</Label>
                    <Input
                      id="api-secret"
                      value={newKey.secret}
                      onChange={(e) =>
                        setNewKey({ ...newKey, secret: e.target.value })
                      }
                      type="password"
                      placeholder="Enter API secret"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="set-active"
                    checked={newKey.isActive}
                    onCheckedChange={(checked) =>
                      setNewKey({ ...newKey, isActive: checked })
                    }
                  />
                  <Label htmlFor="set-active">Set as active key</Label>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setShowAddForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button onClick={addKey}>Add Key</Button>
                </div>
              </div>
            </div>
          ) : (
            <Button variant="outline" onClick={() => setShowAddForm(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add New Key
            </Button>
          )}
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Your Razorpay API keys can be found in your Razorpay Dashboard under
            Settings &gt; API Keys.
          </p>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Settings</CardTitle>
          <CardDescription>
            Configure general payment settings for your events.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="test-mode" />
            <Label htmlFor="test-mode">Enable test mode</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="auto-capture" defaultChecked />
            <Label htmlFor="auto-capture">Auto-capture payments</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="send-receipt" defaultChecked />
            <Label htmlFor="send-receipt">
              Send payment receipts automatically
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="international" />
            <Label htmlFor="international">Accept international payments</Label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
