import Navigo from "navigo";
// import express from "express";
import contactPage from "./pages/contact";
import DashBoard from "./pages/admin/dashboard";
import detailProduct from "./pages/detailProduct";
import HomePage from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import CartPage from "./pages/CartPage";
import thanhtoan from "./pages/CheckOut";
import indexNews from "./pages/admin/product/indexNews";
import EditProducts from "./pages/admin/product/editNews";
import AddProduct from "./pages/admin/product/addNews";
import indexCategory from "./pages/admin/category/indexCategory";
import AddCategory from "./pages/admin/category/addCategory";
import EditCategory from "./pages/admin/category/editCategory";
import ProInTheCate from "./pages/ProInTheCate";
import ok from "./pages/ok";
import PageSearch from "./pages/PageSearch";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const render = async (content, id) => {
	document.querySelector("#app").innerHTML = await content.print(id);
	if (content.afterRender) content.afterRender(id);
};



router.on("/admin/*", () => { }, {
	before(done, match) {
		if (localStorage.getItem('user')) {
			const userRole = JSON.parse(localStorage.getItem('user')).role;
			if (userRole === 1) {
				done();
			} else {
				document.location.href = "/";
			}
		} else {
			document.location.href = "/";
		}

	}
})

router.on({
	"/": () => {
		render(HomePage);
	},

	"/contact": () => {
		render(contactPage);
	},

	"/signup": () => {
		render(SignUp);
	},

	"/signin": () => {
		render(SignIn);
	},

	"/products/:id": (value) => {
		console.log(value.data.id);
		render(detailProduct, value.data.id);
	},

	"/admin/dashboard": () => {
		render(DashBoard);
	},

	"/cart": () => {
		render(CartPage);
	},
	"/thanhtoan": () => {
		render(thanhtoan);
	},

	"/ok": () => {
		render(ok);
	},

	"/productCate/:id": (value) => {
		var id = value.data.id;
		render(ProInTheCate, id);
	},

	"/search": () => {
		render(PageSearch);
	},
	// SẢN PHẨM

	"/admin/product": () => {
		render(indexNews);
	},

	"/admin/product/add": () => {
		render(AddProduct);
	},

	"/admin/product/:id/edit": (value) => {
		var id = value.data.id;
		render(EditProducts, id);
	},

	// DANH MỤC 

	"/admin/category": () => {
		render(indexCategory);
	},

	"/admin/category/add": () => {
		render(AddCategory);
	},

	"/admin/category/:id/edit": (value) => {
		var id = value.data.id;
		render(EditCategory, id);
	},

});

router.notFound(() => {
	console.log("Not Found Page");
});
router.resolve();
