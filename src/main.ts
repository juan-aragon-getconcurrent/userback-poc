declare global {
	interface UserBack {
		access_token: string;
		user_data: Record<string, unknown>;
		widget_settings: Record<string, unknown>;
		open: () => void;
		on_load: () => void;
	}
	interface Window {
		Userback: UserBack
	}

}

function getUser() {
	const searchParam = new URLSearchParams(window.location.search);
	const name = searchParam.get('name') || ""
	const email = searchParam.get('email') || ""
	let id = searchParam.get('id')
	if (!id) {
		id = String(Math.floor(Math.random() * 999999))
	}
	return [{
		name,
		email
	}, id]
}

const [user, id] = getUser();
console.log({ user, id })


window.Userback = window.Userback || {};
window.Userback.access_token = "A-JC47UvzGlVMJ8CIcCVJ0RvdLf";
// identify your logged-in users (optional)
window.Userback.user_data = {
	id, // example data
	info: user
};
window.Userback.on_load = () => {
	window.Userback.open();

};
(function(d) {
	var s = d.createElement('script'); s.async = true; s.src = 'https://static.userback.io/widget/v1.js'; (d.head || d.body).appendChild(s);
})(document);
