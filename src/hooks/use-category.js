import {useEffect, useState} from "react"
import {getBaseService} from "../utils/helpers";
import {useParams} from "react-router";
import img1 from "../assets/images/media/blusas_logo.png";

/* Its receive the items object and the retrieve function */
const useCategory = (items, getAll) => {

    let [categories, setCategories] = useState( [] );
    let { ws } = useParams();

    useEffect(() => {
        if(items <= 0) {
            getAll();
        } else {
            const adaptorCategory = getAdaptorCategory(items);
            setCategories(adaptorCategory);
        }
    }, []);

    const getAdaptorCategory = (allCategories) => {
        if(allCategories.length > 0){
            //img1
            const _categories = allCategories.filter(_it => _it.status > 0).map(_item => ({
                id: _item.id,
                title: _item.name,
                img: _item['filenameCatalog'] ? getBaseService() + '/uploads/categories/' + _item['filenameCatalog'] : img1,
                route: `/${ws}/${_item.id}/products`
            }));

            return [{id:1, items:_categories}];
        } else {
            return [{id: 1, items: []}];
        }
    }

    useEffect(() => {

            const adaptorCategory = getAdaptorCategory(items);
            setCategories(adaptorCategory);


    }, [items]);

    return {
        categories,
        ws
    }
}

export default useCategory;
