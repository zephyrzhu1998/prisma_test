import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here

  // 1. 查询所有user数据

  // const result = await prisma.user.findMany()
  // console.log(result)

  // 2. 新建一个user

  // const result = await prisma.user.create({
  //   data:{
  //     email:"abc@qq.com"
  //   }
  // })

  // 3. 更新user信息

  // const result = await prisma.user.update({
  //   where:{
  //     email:"abc@qq.com"
  //   },
  //   data:{
  //     name:"zyy"
  //   }
  // })

  // 4. 新建一个post

  // const result = await prisma.post.create({
  //   data:{
  //     title:"Hello World!"
  //   }
  // })

  // 5. 将这个post与一个user关联

  // const result = await prisma.post.update({
  //   where:{
  //     id:1
  //   },
  //   data:{
  //     author:{
  //       connect:{email:"abc@qq.com"}
  //     }
  //   }
  // })

  // 6. 嵌套查询 同时查询一个user和所有与其关联的post

  // const result = await prisma.user.findUnique({
  //   where:{email:"abc@qq.com"},
  //   include:{posts:true}
  // })

  // 7. 有敏感词 用select

  // const result = await prisma.user.findMany({
  //   select:{
  //     id:true,
  //     name:true,
  //   }
  // })
  
  // 8. 创建user的同时，创建一个post

  const result = await prisma.post.create({
    data:{
      title:"Hello World!"
    }
  })

  console.log(result)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
