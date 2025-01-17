<div class="vidseo-segment">
    <div class="vidseo-row">
    
        <div class="vidseo-column col-4">
            
            <span class="vidseo-label">
                <?php echo  esc_html__( 'Delete Settings', 'vidseo' ); ?></span>
            </div>
    
        <div class="vidseo-column col-8">
            
            <label class="vidseo-switch">
    
                <input type="checkbox" id="remove_settings" name="remove_settings" value="remove_settings" <?php if ( $options::check('remove_settings') ) { echo  'checked' ;  } ?> />
    
                <span class="vidseo-slider vidseo-round"></span>
    
            </label>
            &nbsp;
            <span><?php echo esc_html__( 'Checking this box will remove all settings when you deactivate plugin.', 'vidseo' ); ?></span>
            
        </div>
    
    </div>
</div>