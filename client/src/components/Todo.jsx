import MainBody from "./mainbody/MainBody";
import Menu from "./menu/Menu";
function Todo() {
    return (
        <div className="flex p-2">
              <Menu />
            <MainBody />
        </div>
    );
}

export default Todo;