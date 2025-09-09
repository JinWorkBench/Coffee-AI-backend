import {
  Controller,
  Get,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common';

type Product = {
  id: string;
  type: 'bean' | 'goods';
  name: string;
  price: number;
  weight?: string;
  image: string;
  cupnote?: string;
  desc?: string;
};

// 목업 데이터 하드 코딩
const PRODUCTS: Product[] = [
  {
    id: '1',
    type: 'bean',
    name: '콜롬비아 알토 씨엘로 게이샤 워시드',
    price: 18000,
    weight: '100g, 200g',
    image: '/coffee/beans.jpg',
    cupnote: '자스민, 아카시아, 자몽, 화이트와인',
    desc: '게이샤의 맛과 향을 섬세하게 담았습니다.',
  },
  {
    id: '2',
    type: 'bean',
    name: '인도네시아 가요 쁘가싱 CM 내추럴',
    price: 17000,
    weight: '100g, 200g',
    image: '/coffee/beans2.jpg',
    cupnote: '적포도, 멜론, 카카오닙스, 레드와인',
    desc: '산미와 단맛의 밸런스가 좋은 커피입니다.',
  },
];

@Controller('products')
export class ProductsController {
  // 목록: GET /products?type=bean
  @Get()
  list(@Query('type') type?: string) {
    return type ? PRODUCTS.filter((p) => p.type === type) : PRODUCTS;
  }

  // 상세: GET /products/:id
  @Get(':id')
  detail(@Param('id') id: string) {
    const item = PRODUCTS.find((p) => p.id === id);
    if (!item) throw new NotFoundException('상품이 없습니다');
    return item;
  }
}
