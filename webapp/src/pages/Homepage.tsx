import "./homepage.css";
import ItemView from '../components/ItemView';

function Init(): JSX.Element {


    return (
        <div className="encabezado">
            <h1>AsturShop</h1>
            <div className="productos">
                <ItemView></ItemView>
            </div>
        </div>
    );
}

export default Init;