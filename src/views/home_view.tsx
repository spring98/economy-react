import {useSelector} from "react-redux";
import {RootState} from "../core/state_management/reducers";
import CountViewModel from "../core/view_models/count_view_model";

function HomeView() {
    const count = useSelector((state: RootState) => state.countReducer.count);
    const countViewModel = new CountViewModel();

    return (
        <div>
            <h1> count view 만들기 </h1>
            <h2> {count} </h2>
            <button onClick={() => countViewModel.updateCount(-3)}> - 3 </button>
            <button onClick={() => countViewModel.updateCount(3)}> + 3 </button>
        </div>
    );
}

export default HomeView;
