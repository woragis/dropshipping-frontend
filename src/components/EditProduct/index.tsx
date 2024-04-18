import { ChangeEvent, FormEvent, useState } from 'react'

interface ProductComponentProps {
    _id: string;
    Title: string;
    Price: string;
    Description: string;
}
export const EditProduct = ({_id, Title, Price, Description}: ProductComponentProps) => {
    interface EditedProduct {
        title: string;
        price: string;
        description: string;
    }
    const [productData, setProductData] = useState<EditedProduct>({title: Title, price: Price, description: Description})
    const handleProductChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProductData({...productData, [event.target.id]: event.target.value})
    }
    const saveEditedProduct = async (event: FormEvent) => {
        event.preventDefault()
        try {
            const token = localStorage.getItem('token')
            const backendUri = "http://localhost:5000/products/update"
            const response = await fetch(backendUri, {
                method: "POST",
                body: JSON.stringify(productData),
                credentials: 'include',
                headers: {
                  'Content-Type': 'application/json',
                  authorization: `Bearer ${token}`,
                },
            })
            const responseData = await response.json()
            if (response.ok) {
                console.log(responseData)
            } else {
                console.log("Error saving product")
            }
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <form onSubmit={saveEditedProduct}>
            <>
                <>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name='title' id='title' value={productData.title} onChange={handleProductChange}/>
                    <label htmlFor="price">Price: R$ </label>
                    <input type="text" name='price' id='price' value={productData.price} onChange={handleProductChange}/>
                    <label htmlFor="description">Description: </label>
                    <input type="text" name='description' id='description' value={productData.description} onChange={handleProductChange}/>
                    <button>Save</button>
                </>
            </>
        </form>
    )
}