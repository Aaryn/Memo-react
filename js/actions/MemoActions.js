import Reflux from 'reflux';

const TodoActions = Reflux.createActions([
	'addNewItem',
	'completeItem',
	'deleteItem',
	'loadItems'
]);

export default TodoActions;