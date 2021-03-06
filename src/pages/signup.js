import { signup } from "../api/users";
import Footer from "../components/footer";
import Header from "../components/header";

const SignIn = {
    print() {
        return /*html*/ `
           <header id="header" class="grid grid-cols-8 gap-5 bg-[#f1f0f1] py-3 px-2 sticky top-0 z-50 border  border-gray-300 border-y-0">${Header.print()}</header>
			<main class="grid grid-cols-8 gap-3 my-2 relative">
					<div class="col-span-8 bg-grey-lighter min-h-screen flex flex-col bg-[#f3f7f9]">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
						<form action="" class="form">
								<h1 class="mb-8 text-3xl text-center">Đăng Ký</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4 name"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4 email"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4 password"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4 re-password"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green-500 text-white  my-1"
                    >Đăng Ký</button>
						</form>
                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Bạn đã có tài khoản? 
                    <a class="no-underline border-b border-blue-500 text-blue-500" href="/signup">
                        Đăng Nhập
                    </a>.
                </div>
            </div>
        </div>
			</main>
			<footer class="bg-[#272f54] text-center" id="footer">${Footer.printf()}</footer>
        `;
    },

    afterRender() {
        Header.afterRender();
        const Form = document.querySelector(".form");
        const userName = document.querySelector(".name");
        const email = document.querySelector(".email");
        const password = document.querySelector(".password");
        const rePassword = document.querySelector(".re-password")

        Form.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const response = await signup({
                    username: userName.value,
                    email: email.value,
                    password: password.value,
                    role: 0,
                });

                console.log(response);
            } catch (error) {
                console.log(error.response.data);
            }

            alert("Đăng ký tài khoản thành công")

        })
    }
};

export default SignIn;