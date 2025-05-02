"use client";

import { MessageSquare, Trophy, Vote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CreatePollModal } from "@/components/modals/create-poll-modal";
import { CreateFeedbackFormModal } from "@/components/modals/create-feedback-form-modal";

export function EventEngagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Engagement</h2>
      </div>

      <Tabs defaultValue="polls">
        <TabsList>
          <TabsTrigger value="polls">
            <Vote className="mr-2 h-4 w-4" />
            Polls & Q&A
          </TabsTrigger>
          <TabsTrigger value="leaderboard">
            <Trophy className="mr-2 h-4 w-4" />
            Leaderboard
          </TabsTrigger>
          <TabsTrigger value="feedback">
            <MessageSquare className="mr-2 h-4 w-4" />
            Feedback
          </TabsTrigger>
        </TabsList>

        <TabsContent value="polls" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Live Polls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Which topic are you most interested in?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Artificial Intelligence</span>
                          <span>42%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: "42%" }}
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Web Development</span>
                          <span>28%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: "28%" }}
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Cloud Computing</span>
                          <span>18%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: "18%" }}
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Cybersecurity</span>
                          <span>12%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: "12%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Total votes: 156
                      </span>
                      <div className="flex items-center gap-2">
                        <Switch id="poll-active" defaultChecked />
                        <Label htmlFor="poll-active">Active</Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      How would you rate the keynote?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Excellent</span>
                          <span>56%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: "56%" }}
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Good</span>
                          <span>32%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: "32%" }}
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Average</span>
                          <span>10%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: "10%" }}
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Poor</span>
                          <span>2%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: "2%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Total votes: 98
                      </span>
                      <div className="flex items-center gap-2">
                        <Switch id="poll-active-2" />
                        <Label htmlFor="poll-active-2">Active</Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <CreatePollModal />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Live Q&A</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">John Doe</h4>
                        <Badge variant="outline">Attendee</Badge>
                      </div>
                      <p className="mt-1">
                        How do you see AI impacting the job market in the next 5
                        years?
                      </p>
                      <div className="mt-2 flex items-center gap-4">
                        <Button variant="outline" size="sm">
                          Answer Live
                        </Button>
                        <span className="text-sm text-muted-foreground">
                          Upvotes: 24
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>EJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">Emily Johnson</h4>
                        <Badge variant="outline">Attendee</Badge>
                      </div>
                      <p className="mt-1">
                        What skills should developers focus on learning in 2024?
                      </p>
                      <div className="mt-2 flex items-center gap-4">
                        <Button variant="outline" size="sm">
                          Answer Live
                        </Button>
                        <span className="text-sm text-muted-foreground">
                          Upvotes: 18
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Input placeholder="Ask a question..." />
                <Button>Submit</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Engagement Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-muted p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>EJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Emily Johnson</h4>
                      <p className="text-sm text-muted-foreground">
                        Attended 8 sessions
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">1,250</div>
                    <p className="text-sm text-muted-foreground">points</p>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      2
                    </div>
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>MB</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Michael Brown</h4>
                      <p className="text-sm text-muted-foreground">
                        Attended 7 sessions
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">980</div>
                    <p className="text-sm text-muted-foreground">points</p>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      3
                    </div>
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>SD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Sarah Davis</h4>
                      <p className="text-sm text-muted-foreground">
                        Attended 6 sessions
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">820</div>
                    <p className="text-sm text-muted-foreground">points</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Point System Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="session-attendance">Session Attendance</Label>
                  <Input
                    id="session-attendance"
                    type="number"
                    defaultValue="100"
                  />
                  <p className="text-xs text-muted-foreground">
                    Points awarded for attending a session
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="question-asked">Question Asked</Label>
                  <Input id="question-asked" type="number" defaultValue="50" />
                  <p className="text-xs text-muted-foreground">
                    Points awarded for asking a question
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="poll-participation">Poll Participation</Label>
                  <Input
                    id="poll-participation"
                    type="number"
                    defaultValue="25"
                  />
                  <p className="text-xs text-muted-foreground">
                    Points awarded for participating in a poll
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="feedback-submission">
                    Feedback Submission
                  </Label>
                  <Input
                    id="feedback-submission"
                    type="number"
                    defaultValue="75"
                  />
                  <p className="text-xs text-muted-foreground">
                    Points awarded for submitting feedback
                  </p>
                </div>
              </div>

              <Button>Save Point Configuration</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Feedback Forms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Session Feedback
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Collect feedback after each session
                    </p>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Overall Event Feedback
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Collect feedback about the entire event
                    </p>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <CreateFeedbackFormModal />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Feedback Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <div className="text-center">
                  <h3 className="text-lg font-medium">Feedback Analytics</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    This section would display analytics and insights from
                    collected feedback
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
