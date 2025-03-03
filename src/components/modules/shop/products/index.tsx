"use client";

import { NMTable } from "@/components/ui/core/NMTable";
import { ColumnDef } from "@tanstack/react-table";

import { Edit, Eye, Plus, Trash } from "lucide-react";

import { IProduct } from "@/types/products";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ManageProducts = ({ products }: IProduct[]) => {
  const router = useRouter();

  const handleView = (product: IProduct) => {
    console.log("Viewing product:", product);
  };

  const handleDelete = (productId: string) => {
    console.log("Deleting Product with ID:", productId);
  };

  const columns: ColumnDef<IProduct>[] = [
    {
      accessorKey: "name",
      header: () => "Product Name",
      cell: ({ row }) => {
        console.log(row.original);
        return (
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={row.original.images} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-right font-medium w-8">
              {row.original.name}
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => <span>{row.original.category.name}</span>,
    },
    {
      accessorKey: "brand",
      header: "Brand",
      cell: ({ row }) => <span>{row.original.brand.name}</span>,
    },
    {
      accessorKey: "stock",
      header: "Stock",
      cell: ({ row }) => <span>{row.original.stock}</span>,
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => <span>$ {row.original.price.toFixed(2)}</span>,
    },
    {
      accessorKey: "offerPrice",
      header: "Ofter Price",
      cell: ({ row }) => (
        <span>
          $ {row.original.offerPrice ? row.original.offerPrice.toFixed(2) : "0"}
        </span>
      ),
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <button
            className="text-gray-500 hover:text-blue-500"
            title="View"
            onClick={() => handleView(row.original)}
          >
            <Eye className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 hover:text-green-500"
            title="Edit"
            onClick={() =>
              router.push(
                `/user/shop/products/update-product/${row.original._id}`
              )
            }
          >
            <Edit className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 hover:text-red-500"
            title="Delete"
            onClick={() => handleDelete(row.original._id)}
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-bold">Manage Products</h1>
        <div className="flex items-center gap-2">
          <Button
            className="bg-rose-400 hover:bg-rose-500"
            onClick={() => router.push("/user/shop/products/add-product")}
            size="sm"
          >
            Add Product <Plus />
          </Button>
        </div>
      </div>
      <NMTable columns={columns} data={products || []} />
    </div>
  );
};

export default ManageProducts;
