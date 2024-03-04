import "./CreateNote.css";

function EditNote() {
  return (
    <div className="create-note">
      <form>
        <input type="text" placeholder="Title Here ..." />
        <textarea name="" id="" cols="30" rows="10" placeholder="Text Here ..."></textarea>
        {/* <button onSubmit={submit}>Save</button> */}
      </form>
    </div>
  );
}

export default EditNote;
