"use client"

import React from "react"
import {
  Users,
  CreditCard,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  UserPlus,
  TrendingDown,
  ShieldCheck,
  PieChart,
  Activity,
} from "lucide-react"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"

import ClientOnly from "@/components/ClientOnly"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Progress } from "@workspace/ui/components/progress"
import {
  membershipTrends,
  platformUpkeepMetrics,
  recentBoardMembers,
  userDistributions,
} from "@/constants/admin-overview"

export default function DashboardOverview() {
  return (
    <div className="min-h-screen space-y-6 bg-slate-50 p-4 text-slate-900 md:px-6 dark:bg-slate-900 dark:text-slate-50">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Dashboard Overview
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Internal Custom Membership & Financial Control Center.
          </p>
        </div>
        <div className="flex w-full flex-wrap gap-2 sm:w-auto">
          <Button
            variant="outline"
            size="sm"
            className="flex flex-1 items-center justify-center gap-2 sm:flex-none"
          >
            <RefreshCw className="h-4 w-4" /> Refresh Metrics
          </Button>
          <Button
            size="sm"
            className="flex flex-1 items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 sm:flex-none"
          >
            <UserPlus className="mr-2 h-4 w-4" /> Register New Member
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Active Members
            </CardTitle>
            <Users className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold md:text-3xl">245</div>
            <p className="mt-1 flex items-center text-xs text-green-600">
              <ArrowUpRight className="mr-1 h-3 w-3" /> +14% since last quarter
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Revenue (USD)
            </CardTitle>
            <CreditCard className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold md:text-3xl">$39,375</div>
            <Progress value={78} className="mt-5 h-1.5 [&>div]:bg-green-600" />
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Membership Churn Rate
            </CardTitle>
            <TrendingDown className="h-4 w-4 text-rose-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold md:text-3xl">2.4%</div>
            <p className="mt-1 flex items-center text-xs text-red-700">
              <ArrowDownRight className="mr-1 h-3 w-3" /> -0.8% down from last
              month
            </p>
          </CardContent>
        </Card>

        <Card className="border-emerald-500/20 bg-emerald-50/20 shadow-sm dark:bg-emerald-950/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              Gateway Status
            </CardTitle>
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-700 md:text-3xl dark:text-emerald-400">
              Operational
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="shadow-sm lg:col-span-2">
          <CardHeader>
            <CardTitle>Membership Growth Analytics</CardTitle>
          </CardHeader>
          <CardContent className="h-64 md:h-80">
            <ClientOnly>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={membershipTrends}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-slate-200 dark:stroke-slate-800"
                  />
                  <XAxis dataKey="month" tickLine={false} />
                  <YAxis tickLine={false} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="general"
                    stroke="currentColor"
                    fill="url(#colorGeneral)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ClientOnly>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
