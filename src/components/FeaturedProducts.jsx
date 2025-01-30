import SectionTitle from "./SectionTitle"
import ProductsGrid from "./ProductsGrid"

function FeaturedProducts() {
    return (
        <div className="pt-24">
            <SectionTitle text="featured products" />
            <ProductsGrid />
        </div>
    )
}

export default FeaturedProducts