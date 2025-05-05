"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, Filter, Search } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample payment data
const payments = [
  {
    id: "PAY-1234567",
    date: "2023-11-15T14:30:00",
    amount: 299.0,
    currency: "USD",
    status: "completed",
    method: "credit_card",
    customer: "John Smith",
    email: "john.smith@example.com",
    ticketType: "Regular",
    gateway: "Razorpay",
    transactionId: "rzp_123456789",
    refundable: true,
  },
  {
    id: "PAY-1234568",
    date: "2023-11-15T15:45:00",
    amount: 499.0,
    currency: "USD",
    status: "completed",
    method: "paypal",
    customer: "Emily Johnson",
    email: "emily.johnson@example.com",
    ticketType: "VIP",
    gateway: "Razorpay",
    transactionId: "rzp_123456790",
    refundable: true,
  },
  {
    id: "PAY-1234569",
    date: "2023-11-16T09:15:00",
    amount: 99.0,
    currency: "USD",
    status: "completed",
    method: "credit_card",
    customer: "Michael Brown",
    email: "michael.brown@example.com",
    ticketType: "Student",
    gateway: "Razorpay",
    transactionId: "rzp_123456791",
    refundable: true,
  },
  {
    id: "PAY-1234570",
    date: "2023-11-16T11:30:00",
    amount: 299.0,
    currency: "USD",
    status: "failed",
    method: "credit_card",
    customer: "Sarah Davis",
    email: "sarah.davis@example.com",
    ticketType: "Regular",
    gateway: "Razorpay",
    transactionId: "rzp_123456792",
    refundable: false,
  },
  {
    id: "PAY-1234571",
    date: "2023-11-17T13:45:00",
    amount: 299.0,
    currency: "USD",
    status: "refunded",
    method: "credit_card",
    customer: "David Wilson",
    email: "david.wilson@example.com",
    ticketType: "Regular",
    gateway: "Razorpay",
    transactionId: "rzp_123456793",
    refundable: false,
  },
  {
    id: "PAY-1234572",
    date: "2023-11-17T16:00:00",
    amount: 199.0,
    currency: "USD",
    status: "completed",
    method: "bank_transfer",
    customer: "Jennifer Lee",
    email: "jennifer.lee@example.com",
    ticketType: "Early Bird",
    gateway: "Razorpay",
    transactionId: "rzp_123456794",
    refundable: true,
  },
  {
    id: "PAY-1234573",
    date: "2023-11-18T10:15:00",
    amount: 499.0,
    currency: "USD",
    status: "pending",
    method: "bank_transfer",
    customer: "Robert Taylor",
    email: "robert.taylor@example.com",
    ticketType: "VIP",
    gateway: "Razorpay",
    transactionId: "rzp_123456795",
    refundable: false,
  },
];

export function EventPaymentTracking() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [methodFilter, setMethodFilter] = useState("all");

  // Filter payments based on search term and filters
  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || payment.status === statusFilter;
    const matchesMethod =
      methodFilter === "all" || payment.method === methodFilter;

    return matchesSearch && matchesStatus && matchesMethod;
  });

  // Calculate totals
  const totalRevenue = payments
    .filter((p) => p.status === "completed")
    .reduce((sum, payment) => sum + payment.amount, 0);

  const totalRefunded = payments
    .filter((p) => p.status === "refunded")
    .reduce((sum, payment) => sum + payment.amount, 0);

  const totalPending = payments
    .filter((p) => p.status === "pending")
    .reduce((sum, payment) => sum + payment.amount, 0);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatCurrency = (amount, currency) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Payment Tracking</h2>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(totalRevenue, "USD")}
            </div>
            <p className="text-xs text-muted-foreground">
              From {payments.filter((p) => p.status === "completed").length}{" "}
              completed payments
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Refunded
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(totalRefunded, "USD")}
            </div>
            <p className="text-xs text-muted-foreground">
              From {payments.filter((p) => p.status === "refunded").length}{" "}
              refunded payments
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Payments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(totalPending, "USD")}
            </div>
            <p className="text-xs text-muted-foreground">
              From {payments.filter((p) => p.status === "pending").length}{" "}
              pending payments
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Payments</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="refunded">Refunded</TabsTrigger>
              <TabsTrigger value="failed">Failed</TabsTrigger>
            </TabsList>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-1 items-center gap-2">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search payments..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-4" align="end">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Status</h4>
                        <Select
                          value={statusFilter}
                          onValueChange={setStatusFilter}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Statuses</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="refunded">Refunded</SelectItem>
                            <SelectItem value="failed">Failed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Payment Method</h4>
                        <Select
                          value={methodFilter}
                          onValueChange={setMethodFilter}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Methods</SelectItem>
                            <SelectItem value="credit_card">
                              Credit Card
                            </SelectItem>
                            <SelectItem value="paypal">PayPal</SelectItem>
                            <SelectItem value="bank_transfer">
                              Bank Transfer
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Date Range
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="end">
                    <div className="p-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Select Date Range</h4>
                        <p className="text-sm text-muted-foreground">
                          Calendar placeholder - would implement date picker
                          here
                        </p>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <TabsContent value="all" className="mt-4 p-0">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Payment ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="w-[100px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPayments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell className="font-medium">
                          {payment.id}
                        </TableCell>
                        <TableCell>{formatDate(payment.date)}</TableCell>
                        <TableCell>
                          <div>
                            <div>{payment.customer}</div>
                            <div className="text-sm text-muted-foreground">
                              {payment.email}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          {formatCurrency(payment.amount, payment.currency)}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              payment.status === "completed"
                                ? "default"
                                : payment.status === "pending"
                                ? "outline"
                                : payment.status === "refunded"
                                ? "secondary"
                                : "destructive"
                            }
                          >
                            {payment.status.charAt(0).toUpperCase() +
                              payment.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {payment.method === "credit_card"
                            ? "Credit Card"
                            : payment.method === "paypal"
                            ? "PayPal"
                            : payment.method === "bank_transfer"
                            ? "Bank Transfer"
                            : payment.method}
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Other tabs would filter by status */}
            <TabsContent value="completed" className="mt-4 p-0">
              {/* Similar table with filtered data */}
            </TabsContent>
            <TabsContent value="pending" className="mt-4 p-0">
              {/* Similar table with filtered data */}
            </TabsContent>
            <TabsContent value="refunded" className="mt-4 p-0">
              {/* Similar table with filtered data */}
            </TabsContent>
            <TabsContent value="failed" className="mt-4 p-0">
              {/* Similar table with filtered data */}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
