import store from 'store';

/**
 * @param {String} 		type 	校验权限类型 contents/report/component/data
 * @param {Number} 		id 		类型ID
 * @param {Number} 		action 	操作类型 增删改查 0123
 * @return {Boolean} 			是否有相应权限
 */
export const checkPermission = (type = 'contents', id, action = 3) => {
	let permission = store.state.permission[type];
	let target = permission.find((item) => {
		if (parseInt(item.id) === id) return item;
	});
	if (target && target.value.split('')[action] === '1') {
		return true;
	}
	return false;
};
