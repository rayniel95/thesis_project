interface HypoModel<T> {
    create: boolean;
    read: T;
    update: boolean;
    delete: boolean;
    list: T[];
}
export { HypoModel };
