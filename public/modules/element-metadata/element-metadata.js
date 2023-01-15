const metadataDictionaries = {}; // key: id, value: another dictionary
const DATA_ELEMENT_ID_ATTRIBUTE = "data-element-id";


class ModuleMetadataManager {
    moduleId;

    /**
     * @param moduleId
     *      Just give any arbitrary value. String or number is preferred.
     *      Please make it as unique as possible
     *      This one is used to prevent metadata keyword clashes (same name but different module)
     */
    constructor(moduleId) {
        this.moduleId = moduleId;
    }

    getManager(element) {
        return new ElementMetadataManager(element);
    }

    _getMetadatakeyword(metadataKeyword){
        return `${this.moduleId}-${metadataKeyword}`;
    }

    getMetadata(element, metadataKeyword) {
        metadataKeyword = this._getMetadatakeyword(metadataKeyword);

        const elementMetadataManager = this.getManager(element);
        return elementMetadataManager.getMetadata(metadataKeyword);
    }

    setMetadata(element, metadataKeyword, value) {
        metadataKeyword = this._getMetadatakeyword(metadataKeyword);

        const elementMetadataManager = this.getManager(element);
        return elementMetadataManager.setMetadata(metadataKeyword, value);
    }
}


class ElementMetadataManager{
    element;
    elementId;
    metadatas;

    /**
     * @param element
     */
    constructor(element) {
        this.element = element;
        this.elementId = getId(element);
        this.metadatas = metadataDictionaries[this.elementId];
    }

    getMetadata(metadataKeyword){
        return this.metadatas[metadataKeyword];
    }

    setMetadata(metadataKeyword, value){
        this.metadatas[metadataKeyword] = value;
    }
}



function getId(element){
    const id = element.getAttribute(DATA_ELEMENT_ID_ATTRIBUTE);
    if (id != null)
        return id;
    return reserveNewId(element);
}

function reserveNewId(element){
    const currentId = metadataDictionaries.length;
    metadataDictionaries[currentId] = {};
    element.setAttribute(DATA_ELEMENT_ID_ATTRIBUTE, currentId);
    return currentId;
}