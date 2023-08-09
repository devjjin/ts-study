// 특정 상품 정보 인터페이스
interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
    // ..
}

// Product의 일부만 가져옴
// interface ProductDetail {
//     id: number;
//     name: string;
//     price: number;    
// }

// 2. 특정 상품 상세 정보를 나타내기 위한 API 함수 
// Product 인터페이스의 일부만 필요함
// function displayProductDetail(shoppingItem : { id: number; name: string; price: number}) {
// function displayProductDetail(shoppingItem: ProductDetail) {

// utility type - pick
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>;
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {

}

// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

// Partial : Product 인터페이스의 모든 속성을 optinal로 처리해 선택적으로 사용 가능
type UpdateProduct = Partial<Product>;
// 3. 특정 상품 정보를 업데이트(갱신)하는 API 함수
function updateProductItem(productItem: Partial<Product>) {
    
}