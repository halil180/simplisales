import { gql } from "@apollo/client";

export const CHECK_USER_MUTATION = gql`
mutation  checkUser {
  login(email: "oliverjones@gmail.com", password: "123123")
}
`
export const PRODUCT_QUERY = gql`
  query Products($query:String $index:Int $limit:Int){
  products(query:$query  index:$index limit:$limit ) {
    count
    products {
      id
      description1  
      barcode1
      pSize
      itemType
      createdAt
      price {
        price {
          priceId
          price
          parcelPrice
          discount
          netPrice
          netParcelPrice
        }
        privatePrice {
          priceId
          price
          parcelPrice
          discount
          netPrice
          netParcelPrice
        }
        promoPrice {
          priceId
          price
          parcelPrice
          discount
          netPrice
          netParcelPrice
        }
        clearancePrice {
          priceId
          price
          parcelPrice
          discount
          netPrice
          netParcelPrice
        }
      }
      rawPrices {
        priceId
        price
        parcelPrice
        discount
        netPrice
        netParcelPrice
      }
      categories {
        id
        name
        type
        index
        visible
        pictureUrl
        childCategories {
          id
          name
          type
          index
          pictureUrl
          visible
        }
      }
    }
  }
}
`;