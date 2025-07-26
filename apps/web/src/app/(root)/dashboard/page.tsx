import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/atoms/card';
import { Badge } from '@/src/components/atoms/badge';
import { Button } from '@/src/components/atoms/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/atoms/avatar';
import { Separator } from '@/src/components/atoms/separator';
import {
  CheckSquare,
  Clock,
  TrendingUp,
  Users,
  Calendar,
  Plus,
  ArrowRight,
  MoreHorizontal,

  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';

// Mock data - replace with real data from your DAL
const mockStats = {
  totalTasks: 24,
  completedTasks: 18,
  pendingTasks: 6,
  teamMembers: 8,
};

const mockRecentTasks = [
  {
    id: 1,
    title: 'Design homepage layout',
    status: 'In Progress',
    priority: 'High',
    dueDate: '2024-01-15',
    assignee: { name: 'Sarah Chen', avatar: '/avatars/sarah.jpg' },
  },
  {
    id: 2,
    title: 'Conduct user interviews',
    status: 'Pending',
    priority: 'Medium',
    dueDate: '2024-01-16',
    assignee: { name: 'John Doe', avatar: '/avatars/john.jpg' },
  },
  {
    id: 3,
    title: 'Write unit tests',
    status: 'Completed',
    priority: 'High',
    dueDate: '2024-01-14',
    assignee: { name: 'Mike Wilson', avatar: '/avatars/mike.jpg' },
  },
  {
    id: 4,
    title: 'Update privacy policy',
    status: 'In Progress',
    priority: 'Low',
    dueDate: '2024-01-18',
    assignee: { name: 'Lisa Park', avatar: '/avatars/lisa.jpg' },
  },
];

const mockProjects = [
  {
    id: 1,
    name: 'Website Redesign',
    progress: 75,
    tasks: 12,
    completed: 9,
    team: 4,
    color: 'bg-blue-500',
  },
  {
    id: 2,
    name: 'Mobile App',
    progress: 45,
    tasks: 8,
    completed: 4,
    team: 3,
    color: 'bg-green-500',
  },
  {
    id: 3,
    name: 'API Integration',
    progress: 90,
    tasks: 6,
    completed: 5,
    team: 2,
    color: 'bg-purple-500',
  },
];

function StatCard({ title, value, change, icon: Icon, trend }: {
  title: string;
  value: string | number;
  change: string;
  icon: React.ComponentType<{ className?: string }>;
  trend: 'up' | 'down';
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">
          <span className={`inline-flex items-center ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            <TrendingUp className="h-3 w-3 mr-1" />
            {change}
          </span>
          {' '}from last month
        </p>
      </CardContent>
    </Card>
  );
}

function TaskItem({ task }: { task: typeof mockRecentTasks[0] }) {
  const statusColors = {
    'Completed': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'In Progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    'Pending': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  };

  const priorityColors = {
    'High': 'text-red-600',
    'Medium': 'text-yellow-600',
    'Low': 'text-green-600',
  };

  return (
    <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div className="flex-shrink-0">
          {task.status === 'Completed' ? (
            <CheckCircle2 className="h-5 w-5 text-green-600" />
          ) : (
            <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{task.title}</p>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="secondary" className={statusColors[task.status as keyof typeof statusColors]}>
              {task.status}
            </Badge>
            <span className={`text-xs font-medium ${priorityColors[task.priority as keyof typeof priorityColors]}`}>
              {task.priority}
            </span>
            <span className="text-xs text-muted-foreground">Due {task.dueDate}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <Avatar className="h-6 w-6">
          <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
          <AvatarFallback className="text-xs">
            {task.assignee.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: typeof mockProjects[0] }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`h-3 w-3 rounded-full ${project.color}`} />
            <CardTitle className="text-base">{project.name}</CardTitle>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{project.progress}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${project.color}`}
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <div className="flex items-center gap-1">
            <CheckSquare className="h-4 w-4 text-muted-foreground" />
            <span>{project.completed}/{project.tasks} tasks</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{project.team} members</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default async function DashboardPage() {
  // TODO: Fetch data on the server
  // const taskDAL = await TaskDAL.createOrRedirect('/sign-in');
  // const taskListDAL = await TaskListDAL.createOrRedirect('/sign-in');

  // Get user tasks and task lists
  // const personalTasks = await taskDAL.getUserTasks();
  // const orgTasks = await taskDAL.getOrgTasks();
  // const taskLists = await taskListDAL.getUserTaskLists();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Welcome back!</h1>
        <p className="text-muted-foreground">
          Here&apos;s what&apos;s happening with your projects today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Tasks"
          value={mockStats.totalTasks}
          change="+12%"
          icon={CheckSquare}
          trend="up"
        />
        <StatCard
          title="Completed"
          value={mockStats.completedTasks}
          change="+8%"
          icon={CheckCircle2}
          trend="up"
        />
        <StatCard
          title="In Progress"
          value={mockStats.pendingTasks}
          change="-2%"
          icon={Clock}
          trend="down"
        />
        <StatCard
          title="Team Members"
          value={mockStats.teamMembers}
          change="+1"
          icon={Users}
          trend="up"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Tasks */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Tasks</CardTitle>
                  <CardDescription>
                    Your latest task updates and assignments
                  </CardDescription>
                </div>
                <Button asChild size="sm">
                  <Link href="/dashboard/tasks">
                    View All
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {mockRecentTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions & Projects */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common tasks and shortcuts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" asChild>
                <Link href="/dashboard/tasks/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Task
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/dashboard/projects/new">
                  <Plus className="mr-2 h-4 w-4" />
                  New Project
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/dashboard/calendar">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Calendar
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/dashboard/team">
                  <Users className="mr-2 h-4 w-4" />
                  Invite Team
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Active Projects */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Active Projects</CardTitle>
                  <CardDescription>
                    Your current project progress
                  </CardDescription>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/dashboard/projects">
                    View All
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockProjects.slice(0, 2).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Section - Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Latest updates from your team and projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm">
                  <span className="font-medium">Sarah Chen</span> completed the task{' '}
                  <span className="font-medium">&quot;Design homepage layout&quot;</span>
                </p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <Separator />
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm">
                  <span className="font-medium">John Doe</span> added 3 new tasks to{' '}
                  <span className="font-medium">Website Redesign</span>
                </p>
                <p className="text-xs text-muted-foreground">4 hours ago</p>
              </div>
            </div>
            <Separator />
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback>MW</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm">
                  <span className="font-medium">Mike Wilson</span> updated the progress on{' '}
                  <span className="font-medium">API Integration</span>
                </p>
                <p className="text-xs text-muted-foreground">6 hours ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
