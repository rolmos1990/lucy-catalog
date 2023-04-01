import {useEffect, useState} from "react"
import {getBaseService, getImageByQuality, productPriceWithDiscount} from "../utils/helpers";
import {useParams} from "react-router";
import {clear_product} from "../redux/features/product-slice";

/* Its receive the items object and the retrieve function */
const useProduct = (items, getCategory) => {

  let [products, setProducts] = useState( [] );
  let { ws, category } = useParams();

  useEffect(() => {
    clear_product();
    getCategory({category});
  }, []);

  const getAdaptorProducts = (allProducts) => {
    if(allProducts && allProducts.length > 0){

      const getUrl = (_item) => {
        try{
          return `/${ws}/${_item.category.id}/p/${_item.id}`;
        }
        catch(e){
          return '#';
        }
      }


      //img1
      const _products = allProducts.map(_item => ({
        id: _item.id,
        title: _item.name,
        img: getImageByQuality(_item.productImage[0], 'medium'),
        reference: _item.reference,
        price: productPriceWithDiscount(_item),
        priceClear: _item,
        discount: _item.discount,
        status: _item.status,
        category: _item.category && _item.category.name,
        categoryDiscount: (_item.category && _item.category.discount) || 0,
        route: getUrl(_item)
      }));

      return _products;
    } else {
      return [];
    }
  }

  useEffect(() => {

    const adaptorCategory = getAdaptorProducts(items);
    setProducts(adaptorCategory);

  }, [items]);

  return {
    products,
    ws,
    category
  }
}

export default useProduct;
