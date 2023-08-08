// 특정 상품 정보 인터페이스
interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
    // ..
}

// Product의 일부만 가져옴
// interface ProductDetail {
//     id: number;
//     name: string;
//     price: number;    
// }

// 상품 상세 API 함수 (Product 인터페이스의 일부만 필요함)
// function displayProductDetail(shoppingItem : { id: number; name: string; price: number}) {
// function displayProductDetail(shoppingItem: ProductDetail) {

// utility type - pick
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>;
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {

}
