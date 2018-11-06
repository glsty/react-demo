import { observable, action } from 'mobx';


export class HomeStore {
    @observable title = 'hello world';
    @action changeVal = ()=> {
        this.title = 'happy'
    }
    
}
export default  new HomeStore();