import AddressListStyle from "./AddressList.module.scss"
import AddressItem from "@/features/address/components/AddressItem/AddressItem.jsx"
import AddressSaveItem from "@/features/address/components/AddressItem/AddressSaveItem.jsx";

export function AddressList({ addresses, saveAddresses }) {
    return (
        <section className={AddressListStyle['address-list']}>
            {addresses.map((address, index) => (
                <AddressItem address={address} key={index}/>
            ))}
            {saveAddresses.map((address, index) => (
                <AddressSaveItem address={address} key={index}/>
            ))}
        </section>
    );
}