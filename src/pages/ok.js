import Footer from "../components/footer";
import Header from "../components/header";


const OrderSuccess = {
    print() {
        return /*html*/`
            <header id="header" class="grid grid-cols-8 gap-5 bg-[#f1f0f1] py-3 px-2 sticky top-0 z-50 border  border-gray-300 border-y-0">${Header.print()}</header>
            <main class="grid grid-cols-8 gap-3 my-2 relative">
                    <div class="col-span-8 my-10">
                    ${localStorage.getItem('infoOrder') ? `
                        <div class="my-0 m-auto w-[70%] text-center">
                            <span class="text-2xl font-bold text-red-500">Đặt Hàng Thành Công, quay lại trang chủ sau 2s ...</span>
						</div>
                        </div>
                    ` : `
                        <span class="text-2xl font-bold text-red-500">Không có thông tin và sản phẩm đơn hàng</span>
                    `}
                        
                    </div>
            </main>
            <footer class="bg-[#272f54] text-center" id="footer">${Footer.printf()}</footer>
        `
    },

    afterRender() {

        setTimeout(function (){
            localStorage.removeItem("infoOrder");
            localStorage.removeItem("cart");
            document.location.href = "/";
        }, 3000)
    }
}

export default OrderSuccess;