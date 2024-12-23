import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    remuveItem: () => void
}
export default function OrderContents({order, remuveItem} : OrderContentsProps) {


  return (
    <div>
        <h2 className="font-black text-4xl">Consumo</h2>
        <div className="space-y-3 mt-10">
            {order.length === 0 ? 
                <p className="text-center">La orden esta vacia</p>
            : (
                order.map( item => (
                    <div 
                    key={item.id}
                    className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
                    >
                        <div className="">
                        <p className="text-lg">
                            {item.name} - {formatCurrency(item.price) }
                        </p>
                        <p className="font-black">
                            Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                        </p>
                        </div>
                        
                        <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                            onClick={() => remuveItem()}
                        >
                            X
                        </button>
                    </div>
                ))
            )
            }
        </div>
    </div>
  )
}
