

const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="flex px-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[104px]" src={image} alt="" />
            <div className="w-3/4 ml-2">
                <h3 className="uppercase">{name} -----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;