
// export interface ProductValue{

//   id: number;
//     addedOn:string;
//     name: string;
//     category: string;
//     description: string;
//     imageUrl: string;
//     price: number;
//     quantity: number;



// }

export interface Product{

  id: string;
    addedOn:string;
    name: string;
    category: string;
    description: string;
    imageUrl: string;
    price: number;
    quantity: number;



}


export interface ProductState{
  products:Product[],
  loading:boolean,
  error:any
}


