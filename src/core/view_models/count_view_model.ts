import {useDispatch} from "react-redux";
import {countAction} from "../state_management/actions/countAction";

class CountViewModel {
    private dispatch = useDispatch();
    public updateCount(count: number) {
        this.dispatch(countAction(count));
    }
}

export default CountViewModel;