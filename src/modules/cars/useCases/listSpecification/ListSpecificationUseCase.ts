import { Specification } from "../../model/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";


class ListSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {
  }
  execute(): Specification[] {
 const categories = this.specificationRepository.list()
 return categories;
}
}
export { ListSpecificationUseCase }
