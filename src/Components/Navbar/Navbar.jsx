import React, { useState } from 'react';
import { SiNike } from "react-icons/si";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoMoonOutline, IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from 'react-router';
import ThemeButton from '../ThemeButton';
import Product from '../Product/Product';
import clsx from "clsx";
import { HiMiniTrash } from "react-icons/hi2";
import { MdAdd } from "react-icons/md";
import { IoMdRemove } from 'react-icons/io';

const Navbar = ({
  cart,
  clearCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const navigate = useNavigate();

  const goToSignin = () => {
    navigate('/register');
  };

  const navLinks = ['HOME', 'MAN', 'WOMAN', 'KIDS', 'COLLECTIONS', 'CONTACT'];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* --- Top Bar --- */}
      <div className="flex w-full bg-gray-200 dark:bg-neutral-900 py-1 justify-between px-4 sm:px-8">
        <p className="font-semibold text-xs sm:text-base truncate pr-2">
          Just Landed: The Nike App. Learn More
        </p>

        <div className="hidden sm:flex gap-3 md:gap-6 font-semibold whitespace-nowrap text-sm">
          <p className="cursor-pointer" onClick={goToSignin}>
            Sign in
          </p>
          <p className="cursor-pointer">Join Us</p>
          <p className="cursor-pointer hidden md:block">Help</p>
          <p className="cursor-pointer md:hidden">?</p>
        </div>
      </div>

      {/* --- Main Navbar --- */}
      <div className="w-full border-y-2 border-gray-400 dark:border-neutral-600 dark:bg-neutral-900 px-4 sm:px-8 flex items-center justify-between h-[60px] bg-white transition-all">
        {/* Left Side */}
        <div className="flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-3xl text-black mr-4"
          >
            {isMenuOpen ? <IoClose /> : <FiMenu />}
          </button>

          <div className="text-4xl lg:text-6xl border-x-2 px-3 lg:px-5 dark:border-neutral-600 border-gray-400 cursor-pointer">
            <SiNike />
          </div>
        </div>

        {/* Center Links */}
        <div className="hidden lg:flex">
          <ul className="flex gap-8 xl:gap-10 *:cursor-pointer *:hover:text-gray-700 *:dark:hover:text-white *:transition-transform *:duration-400 *:hover:scale-112 font-semibold text-base">
            {navLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center">
          <button className="border-x-2 border-gray-400 dark:border-neutral-600 flex lg:p-3.5">
            <ThemeButton />
          </button>

          <button
            onClick={openModal}
            className="border-r-2 z-20 relative border-gray-400 dark:border-neutral-600 p-2 lg:p-3.5"
          >
            <RiShoppingBagLine className="text-2xl lg:text-3xl hover:text-gray-700 dark:hover:text-white transition-transform duration-400 hover:scale-110" />
            <span className="absolute rounded-full top-0.5 right-0 lg:right-2 lg:top-2.5 text-white bg-rose-600 w-4 h-4.5 font-semibold flex items-center justify-center">
              {cart.length}
            </span>
          </button>

          {/* Cart Modal */}
          <div
            className={clsx(
              'w-dvw h-dvh right-0 top-0 fixed bg-black/35 flex-center duration-300',
              isOpen ? '' : 'invisible opacity-0'
            )}
          >
            <div className="absolute border-x-2 border-b-2 border-zinc-400 dark:border-neutral-600 w-full max-w-md top-15 right-0 m-8 h-fit bg-white dark:bg-neutral-800">
              <div>
                <div className="flex justify-between font-semibold px-4 text-lg items-center gap-2 border-y-2 border-zinc-400 dark:border-neutral-600 py-2 bg-neutral-200 dark:bg-neutral-900">
                  <div className="flex">
                    <p>Shopping Cart</p>
                    <p>(<span>{cart.length}</span>)</p>
                  </div>
                  <IoClose
                    onClick={closeModal}
                    className="text-2xl transition-transform duration-400 hover:scale-120 cursor-pointer"
                  />
                </div>

                <div>
                  {cart.length === 0 ? (
                    <p className="w-full text-center font-semibold p-6">
                      Shopping cart is empty :(
                    </p>
                  ) : (
                    cart.map((product) => (
                      <div key={product.id}>
                        <article className="flex border-b-2 hover:bg-[#00000032] border-zinc-400 dark:border-neutral-600 p-4 justify-between">
                          <div className="flex w-1/2">
                            <img className="rounded-sm" src={product.src} />
                          </div>

                          <div className="w-full ml-4">
                            <p className="font-bold text-lg">{product.title}</p>
                            <p className="font-semibold text-neutral-500">{product.size}</p>
                            <p className="text-[#698469] font-semibold">${product.price}</p>

                            <div className="flex mt-4 items-center justify-between w-full">
                              <span className="font-semibold">
                                Number : {product.quantity}
                              </span>

                              <div className="flex rounded-4xl items-center gap-2.5 bg-neutral-200 dark:bg-neutral-900 px-4 py-2 text-2xl">
                                <IoMdRemove
                                  onClick={() => decreaseQty(product.id)}
                                  className="cursor-pointer"
                                />
                                <HiMiniTrash
                                  onClick={() => removeFromCart(product.id)}
                                  className="cursor-pointer text-rose-500"
                                />
                                <MdAdd
                                  onClick={() => increaseQty(product.id)}
                                  className="cursor-pointer"
                                />
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    ))
                  )}

                  <div className="flex border-t-2 border-zinc-400 dark:border-neutral-600 px-5 py-4 bg-neutral-200 dark:bg-neutral-900 justify-between mt-5 w-full">
                    <div className="flex items-center font-semibold gap-1.5 text-md">
                      <span>Total price :</span>
                      <div className="flex text-green-600 font-bold items-center">
                        $
                        {cart.reduce(
                          (sum, item) => sum + item.price * item.quantity,
                          0
                        )}
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={clearCart}
                        className="font-semibold effect px-4 py-1 dark:bg-white bg-black text-white dark:text-neutral-900"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu Drawer --- */}
      <div
        className={`lg:hidden absolute w-full bg-white border-b dark:border-neutral-600 border-gray-400 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col p-6 text-base font-semibold text-black">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="py-3 border-b dark:border-neutral-600 border-gray-200 cursor-pointer hover:text-gray-700 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
