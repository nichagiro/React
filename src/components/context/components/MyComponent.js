import { useDispatch, useStore } from "../store/StoreProvider";

const MyComponent = () => {
    const store = useStore();
    const dispatch = useDispatch();
    return (
        <h1>{store.dataCurrent.toString()}</h1>
    )
}

export default MyComponent
