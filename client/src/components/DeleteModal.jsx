const DeleteModal = ({
    open,
    onClose,
    onConfirm,
}) => {

    if (!open) return null;

    return (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

            <div className="bg-white rounded-xl p-8 w-96">

                <h2 className="text-2xl font-bold">

                    Delete Analysis?

                </h2>

                <p className="mt-3 text-gray-600">

                    This action cannot be undone.

                </p>

                <div className="flex justify-end gap-4 mt-8">

                    <button

                        onClick={onClose}

                        className="px-4 py-2 bg-gray-200 rounded"

                    >

                        Cancel

                    </button>

                    <button

                        onClick={onConfirm}

                        className="px-4 py-2 bg-red-600 text-white rounded"

                    >

                        Delete

                    </button>

                </div>

            </div>

        </div>

    );

};

export default DeleteModal;