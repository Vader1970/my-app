import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import db from "@/db/db";
import { formatCurrency, formatNumber } from "@/lib/formatters";

// Function to fetch sales data
async function getSalesData() {
  const data = await db.order.aggregate({
    _sum: { pricePaidInCents: true },
    _count: true,
  });

  return {
    amount: (data._sum.pricePaidInCents || 0) / 100, // Calculate total sales amount in dollars
    numberOfSales: data._count, // Get the total number of sales
  };
}

// Function to fetch user data
async function getUserData() {
  const [userCount, orderData] = await Promise.all([
    db.user.count(), // Count total users
    db.order.aggregate({
      _sum: { pricePaidInCents: true },
    }),
  ]);

  return {
    userCount, // Total number of users
    averageValuePerUser: userCount === 0 ? 0 : (orderData._sum.pricePaidInCents || 0) / userCount / 100, // Calculate average value per user
  };
}

// Function to fetch product data
async function getProductData() {
  const [activeCount, inactiveCount] = await Promise.all([
    db.product.count({ where: { isAvailableForPurchase: true } }), // Count active products
    db.product.count({ where: { isAvailableForPurchase: false } }), // Count inactive products
  ]);

  return { activeCount, inactiveCount }; // Return counts of active and inactive products
}

// AdminDashboard component renders the admin dashboard page
export default async function AdminDashboard() {
  const [salesData, userData, productData] = await Promise.all([getSalesData(), getUserData(), getProductData()]);

  return (
    // Renders a grid layout for dashboard cards
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {/* Renders a dashboard card for sales data */}
      <DashboardCard
        title='Sales'
        subtitle={`${formatNumber(salesData.numberOfSales)} Orders`}
        body={formatCurrency(salesData.amount)}
      />
      {/* Renders a dashboard card for user data */}
      <DashboardCard
        title='Customers'
        subtitle={`${formatCurrency(userData.averageValuePerUser)} Average Value`}
        body={formatNumber(userData.userCount)}
      />
      {/* Renders a dashboard card for product data */}
      <DashboardCard
        title='Active Products'
        subtitle={`${formatNumber(productData.inactiveCount)} Inactive`}
        body={formatNumber(productData.activeCount)}
      />
    </div>
  );
}

// DashboardCard component renders a dashboard card with specified title, subtitle, and body
type DashboardCardProps = {
  title: string;
  subtitle: string;
  body: string;
};

function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
  return (
    // Renders a card with header and content
    <Card>
      {/* Renders card header with title and subtitle */}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      {/* Renders card content with body */}
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
}
