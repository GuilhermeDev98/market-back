import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export class ProductController {
static  async  createProduct(name: string, brand: string, stock: number, price: number) {
  const newProduct = await prisma.products.create({
    data: {
      name,
      brand,
      stock,
      price
    }
  })
  return newProduct
}

static async  getProductById(id: number) {
  const product = await prisma.products.findUnique({
    where: { id }
  })
  return product
}

static async  getAllProducts() {
  const products = await prisma.products.findMany()
  return products
}

static async  updateProduct(id: number, data: Partial<{ name: string, brand: string, stock: number, price: number }>) {
  const updatedProduct = await prisma.products.update({
    where: { id },
    data
  })
  return updatedProduct
}

static async  deleteProduct(id: number) {
  const deletedProduct = await prisma.products.delete({
    where: { id }
  })
  return deletedProduct
}

}