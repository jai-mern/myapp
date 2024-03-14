import React, { useState } from 'react';

const Billing = () => {
  const [customerName, setCustomerName] = useState('');
  const [billingDate, setBillingDate] = useState('');
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [billingItems, setBillingItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [total, setTotal] = useState(0);

  const handleAddOrUpdateItem = (e) => {
    e.preventDefault();

    if (!customerName || !billingDate || !itemName || !quantity || !price) {
      alert('Please fill in all fields.');
      return;
    }

    if (editingItem) {
      const updatedItems = billingItems.map((item) =>
        item.id === editingItem.id
          ? { ...item, itemName, quantity: parseInt(quantity), price: parseFloat(price) }
          : item
      );

      setBillingItems(updatedItems);
      setEditingItem(null);
    } else {
      const newItem = {
        id: Date.now(),
        customerName,
        billingDate,
        itemName,
        quantity: parseInt(quantity),
        price: parseFloat(price),
      };
      setBillingItems([...billingItems, newItem]);
    }

    clearForm();
    calculateTotal();
  };

  const handleEditItem = (item) => {
    setCustomerName(item.customerName);
    setBillingDate(item.billingDate);
    setItemName(item.itemName);
    setQuantity(item.quantity.toString());
    setPrice(item.price.toString());
    setEditingItem(item);
  };

  const handleDeleteItem = (id) => {
    const updatedItems = billingItems.filter((item) => item.id !== id);
    setBillingItems(updatedItems);
    calculateTotal();
  };

  const calculateTotal = () => {
    const totalAmount = billingItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalAmount.toFixed(2));
  };

  const clearForm = () => {
    setCustomerName('');
    setBillingDate('');
    setItemName('');
    setQuantity('');
    setPrice('');
  };

  return (
    <div style={{ display: "flex" }}>
    <div style={{ width: "20%", background: "#e5e5e5" }}>
      <a href="/Login">Login</a>
    </div>
   
    <div><div className="container mt-4">

      <h2 className="text-center mb-4">Billing</h2>

      <div className="row">
        <form className="col-md-6" onSubmit={handleAddOrUpdateItem}>
          <div className="mb-3">
            <label htmlFor="customerName" className="form-label">Customer Name:</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              className="form-control"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="billingDate" className="form-label">Billing Date:</label>
            <input
              type="date"
              id="billingDate"
              name="billingDate"
              className="form-control"
              value={billingDate}
              onChange={(e) => setBillingDate(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="itemName" className="form-label">Item Name:</label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              className="form-control"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="form-control"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            {editingItem ? 'Update Item' : 'Add Item'}
          </button>
        </form>

        <div className="col-md-6">
          <table className="table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Billing Date</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {billingItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.customerName}</td>
                  <td>{item.billingDate}</td>
                  <td>{item.itemName}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <button className="btn btn-warning" onClick={() => handleEditItem(item)}>
                      Edit
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDeleteItem(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="4" className="text-end fw-bold">Total:</td>
                <td>${total}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
   </div>
  );
};

export default Billing;
