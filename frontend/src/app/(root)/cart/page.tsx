import {FaShoppingBag} from "react-icons/fa";

export default function CartPage() {
  return (
    <div className="bg-slate-800/50 rounded-2xl p-5 shadow-lg pt-20 pl-4">
      <h1 className="text-2xl font-bold text-white mb-4">Cart Page</h1>
      <p className="text-gray-300">This is the cart page content.</p>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Checkout
        </button>
      </div>
      {/* create a div for the cart icon and update the value on click  */}
      <div>
        <FaShoppingBag size={30} className="text-orange-300 mt-4" />
      </div>
      {/* Add more cart-related components or content here */}
    </div>
  );
}