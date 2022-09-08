const BaseDialog = () => {
  return (
    <div className="base-dialog__container">
      <ion-content>
        <button ng-click="showPopup()" class="button icon ion-edit">
          Show Popup
        </button>
      </ion-content>
    </div>
  );
};

export default BaseDialog;
